import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthStackParamList } from '../navigation/types';
import GlobalButton from '../components/common/GlobalButton';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/analise.styles';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Analise'>;

const AnaliseScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleVoltar = () => {
    navigation.navigate('Inicio');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />
      
      <View style={styles.content}>
        <Ionicons name="shield-checkmark-outline" size={100} color={Colors.tealDark} />

        <Text style={styles.headerText}>Recebemos seus dados!</Text>

        <Text style={styles.subHeaderText}>
          Seu perfil está em análise. Entraremos em contato por SMS ou e-mail assim que o processo for concluído.
        </Text>

        <GlobalButton 
          title="VOLTAR AO INÍCIO" 
          onPress={handleVoltar} 
          style={{ marginTop: 40 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AnaliseScreen;