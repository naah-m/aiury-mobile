import React, {use, useCallback} from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { ChatStackParamList } from '../navigation/types';
import { useChats } from '../hooks/useChat';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/chat.styles';

type ChatScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, 'ChatScreen'>;

const ChatScreen = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  const { data: chatsData, isLoading, isError, refetch } = useChats();

  useFocusEffect(
    useCallback(() => {
      if (refetch) { refetch();}
    }, [refetch])
  );

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={Colors.tealLight} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>Erro ao carregar os chats.</Text>
      </View>
    );
  }

  const chats = chatsData?.items || chatsData || [];

  const renderItem = ({ item }: { item: any }) => {
    const chatTitle = item.contactName || 'Ajudante';
    const isEncerrado = item.status === 'encerrado';
    const statusText = isEncerrado ? 'Finalizado' : 'Ativo';

    return (
      <TouchableOpacity 
        style={[styles.chatCard, isEncerrado && { opacity: 0.6 }]}
        onPress={() => navigation.navigate('NewChatScreen', { 
            roomId: item.id_chat.toString(),
            ajudanteNome: chatTitle
        })}
      >
        <View style={styles.chatCardLeft}>
           <View style={[styles.avatarIcon, isEncerrado && { backgroundColor: Colors.grayLight }]}>
              <Ionicons name="person-outline" size={20} color={Colors.white}/>
           </View>
           <Text style={styles.chatCardTitle}>{chatTitle}</Text>
        </View>
        
        <View style={styles.chatCardRight}>
           <Ionicons name="time-outline" size={16} color={Colors.grayDark} style={{ marginRight: 4 }} />
           <Text style={styles.chatCardTime}>{statusText}</Text> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.purpleDark} />
      
      <View style={styles.infoBox}>
         <Text style={styles.infoTitle}>CHATS</Text>
         <Text style={styles.infoText}>
           Assim que o chat for encerrado, você tem total liberdade para escolher se quer mantê-lo ou apagá-lo.
         </Text>
      </View>

      <View style={styles.listSection}>
         <Text style={styles.sectionTitle}>Suas últimas conversas</Text>
         
         <FlatList
            data={chats}
            keyExtractor={(item, index) => item.id_chat?.toString() || index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhum chat iniciado</Text>
            }
         />
      </View>

      <View style={styles.bottomButtonContainer}>
         <TouchableOpacity 
            style={styles.newChatButton}
            onPress={() => navigation.navigate('LoadingScreen' as any)} 
         >
            <Text style={styles.newChatButtonText}>NOVO CHAT</Text>
         </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ChatScreen;