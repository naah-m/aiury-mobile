import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator, Alert, SafeAreaView, StatusBar } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { ChatStackParamList } from '../navigation/types';
import { useSendMessage } from '../hooks/useSendMessage';
import { useChatMessages } from '../hooks/useChatMessages';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import MessageItem from '../components/item/MessageItem'; 
import { Colors } from '../styles/theme/colors';
import styles from '../styles/newChat.styles';

type NewChatScreenRouteProp = RouteProp<ChatStackParamList, 'NewChatScreen'>;

const NewChatScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<NewChatScreenRouteProp>();
  const { user } = useAuth();
  
  const { roomId, ajudanteNome } = route.params;
  
  const [text, setText] = useState(''); 
  const [localMessages, setLocalMessages] = useState<any[]>([]);
  const [isEncerrado, setIsEncerrado] = useState(false);

  const { data: messagesData, isLoading } = useChatMessages(roomId);
  const { mutate: EnviarMensagem, isPending: isSending } = useSendMessage(roomId);

  useEffect(() => {
    const rawMessages = messagesData?.items || messagesData || [];
    setLocalMessages(rawMessages);
  }, [messagesData]);

  const abrirMenuOpcoes = () => {
    Alert.alert(
      "Opções do Chat",
      "O que deseja fazer?",
      [
        { 
          text: "Reportar Problema", 
          onPress: () => navigation.navigate('ReportScreen') 
        },
        { 
          text: "Encerrar Chat", 
          onPress: confirmarEncerramento, 
          style: "destructive" 
        },
        { text: "Cancelar", style: "cancel" }
      ]
    );
  };

  const confirmarEncerramento = () => {
    Alert.alert(
      "Encerrar", 
      "Tem certeza que deseja finalizar este atendimento?",
      [
        { text: "Não", style: "cancel" },
        { 
          text: "Sim", 
          onPress: async () => { 
            try {
              await api.put(`/api/chats/${roomId}/encerrar`);
              setIsEncerrado(true);
            } catch (error) {
              Alert.alert("Erro", "Não foi possível encerrar o atendimento. Tente novamente.");
            }
          }
        }
      ]
    );
  };

  const handleSendMessage = () => {
    if (!text.trim()) return;

    const novaMensagem = {
      id_mensagem: Date.now().toString(),
      text: text,
      origem: 'U' 
    };

    setLocalMessages(prev => [...prev, novaMensagem]);
    
    const textoEnviado = text;
    setText(''); 

    EnviarMensagem(textoEnviado);
  };

  const renderMessage = ({ item }: { item: any }) => {
    const isMyMessage = item.origem === 'U';

    return (
      <MessageItem 
        text={item.text || item.mensagem}
        isUser={isMyMessage} 
      />
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.center]}>
        <ActivityIndicator size="large" color={Colors.tealDark} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.purpleDark} translucent={false} />
      
      <View style={[styles.customHeader, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <Ionicons name="chevron-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        
        <View style={styles.headerUserContainer}>
           <View style={styles.avatarIcon}>
              <Ionicons name="person-outline" size={18} color={Colors.white}/>
           </View>
           <Text style={styles.headerTitle} numberOfLines={1}>
             {ajudanteNome || 'Atendimento'}
           </Text>
        </View>

        <TouchableOpacity onPress={abrirMenuOpcoes} style={styles.headerIcon}>
          <Ionicons name="menu" size={32} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          data={localMessages}
          keyExtractor={(item, index) => item.id_mensagem?.toString() || index.toString()}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
        />

        {isEncerrado ? (
        <View style={styles.encerradoContainer}>
           <Ionicons name="lock-closed" size={20} color={Colors.white} style={{ marginRight: 8 }} />
           <Text style={styles.encerradoTexto}>Atendimento finalizado.</Text>
        </View>
        ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Mensagem"
            placeholderTextColor="#A0A0A0"
            editable={!isSending}
            multiline
          />
          <TouchableOpacity 
            style={[styles.sendButton, !text.trim() && styles.sendButtonDisabled]} 
            onPress={handleSendMessage}
            disabled={isSending || !text.trim()}
            activeOpacity={0.8}
          >
             <Ionicons name="send" size={20} color={Colors.white} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewChatScreen;