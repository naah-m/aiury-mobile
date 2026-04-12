import React, { useEffect } from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ChatStackParamList } from '../navigation/types';
import { useAuth } from '../hooks/useAuth'; 
import { useCreateChat } from '../hooks/useCreateChat'; 
import { Colors } from '../styles/theme/colors';
import styles from '../styles/load.styles';

type LoadingScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, 'LoadingScreen'>;

const LoadingScreen: React.FC = () => {

  const navigation = useNavigation<LoadingScreenNavigationProp>();
  const { userToken, user } = useAuth();
  
  const { mutateAsync: createChat } = useCreateChat(); 

  useEffect(() => {
    let isMounted = true; 

    const findChat = async () => {
      if (!userToken || !user) return;

      try {
        const newRoom = await createChat(''); 
        
        if (isMounted) {
          const nomeDoAjudante = newRoom.participants?.[0]?.nome || 'Ajudante';

          navigation.replace('NewChatScreen', { 
            roomId: newRoom.id_chat || newRoom.id,
            ajudanteNome: nomeDoAjudante 
          });
        }

      } catch (error: any) {
        if (isMounted) {
          Alert.alert('Erro', error.message || 'Não foi possível encontrar um chat no momento.');
          navigation.goBack();
        }
      }
    };

    findChat();

    return () => {
      isMounted = false;
    };
  }, [navigation, userToken, user, createChat]);

  return (
    <View style={styles.container}>

      <ActivityIndicator size='large' color={Colors.white} />
    
      <Text style={styles.statusText}>
        INICIANDO SUA CONVERSA
      </Text>

      <Image 
        source={require('../assets/image/logo_aiury.png')} 
        style={styles.loadingIcon} 
        resizeMode="contain"
      />

    </View>
  );
};

export default LoadingScreen;