import React, { useContext } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { MainTabParamList } from '../navigation/types';
import HomeTopTabNavigator from '../navigation/HomeTabNavigator';
import { buscarChats } from '../services/chatService';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/home.styles';

type NavigationProp = BottomTabNavigationProp<MainTabParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const { user } = useContext(AuthContext);

  const handlePanic = async () => {
    try {
        if (!user) {
            Alert.alert("Erro", "Usuário não autenticado.");
            return;
        }

        const chatsDoUsuario = await buscarChats(user.id);
        
        const chatAberto = chatsDoUsuario.find((chat: any) => chat.status !== 'encerrado');

        if (chatAberto) {
            Alert.alert(
                "Atenção", "Você já possui um atendimento em andamento. Deseja retornar a ele?",
                [
                    { text: "Cancelar", style: "cancel" },
                    { 
                        text: "Ir para o Chat", 
                        onPress: () => {
                            navigation.navigate('ChatTab', { 
                                screen: 'NewChatScreen', 
                                params: { roomId: chatAberto.id_chat, ajudanteNome: chatAberto.contactName }
                            });
                        }
                    }
                ]
            );
            return;
        }

        Alert.alert(
            "Botão de ajuda imediata",
            "Deseja iniciar um chat agora mesmo?", 
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Iniciar Chat", 
                    onPress: () => {
                        navigation.navigate('ChatTab', { screen: 'LoadingScreen' });
                    }
                }
            ]
        );

    } catch (error) {
        Alert.alert("Erro", "Não foi possível verificar seus atendimentos.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.block, styles.tabBlock]}>
        <Text style={styles.blockText}>
          Abaixo você pode conferir algumas das funcionalidades disponíveis em nosso aplicativo
        </Text>
      </View>

      <View style={[styles.block, styles.middleBlock]}>
        <HomeTopTabNavigator />
      </View>

      <TouchableOpacity 
        style={[styles.block, styles.panicButton]} 
        onPress={handlePanic}
        activeOpacity={0.8}
      >
        <Text style={styles.panicText}> Precisa de ajuda imediata? </Text>
        <Text style={styles.panicSubtext}> Inicie um chat agora mesmo, basta pressionar! </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;