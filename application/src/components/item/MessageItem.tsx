import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/theme/colors';

interface MessageItemProps {
  text: string;
  isUser: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ text, isUser }) => {
return (
    <View style={[styles.balao, isUser ? styles.balaoUsuario : styles.balaoAjudante]}>
      <Text style={[styles.texto, isUser ? styles.textoUsuario : styles.textoAjudante]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
balao: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },
  balaoUsuario: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.tealDark, 
    borderTopRightRadius: 4,
  },
  balaoAjudante: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.tealLight,
    borderTopLeftRadius: 4,
  },
  texto: {
    fontSize: 15,
  },
  textoUsuario: {
    color: Colors.white, 
  },
  textoAjudante: {
    color: Colors.white, 
  }
});
export default MessageItem;