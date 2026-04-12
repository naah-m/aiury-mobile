import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/theme/colors';

interface InputAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onAttachPress?: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ value, onChangeText, placeholder, onAttachPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !onAttachPress && { paddingBottom: 15 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.grayLight} 
        multiline={true}
        textAlignVertical="top"
      />

      {onAttachPress && (
        <TouchableOpacity style={styles.attachButton} onPress={onAttachPress} activeOpacity={0.8}>
          <Ionicons name="attach-outline" size={20} color={Colors.white} style={{ transform: [{ rotate: '45deg' }] }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative'
  },
  input: {
    width: '100%',
    height: 180, 
    backgroundColor: Colors.inputTeal,
    borderRadius: 12, 
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 40,
    fontSize: 15,
    color: Colors.white,
    textAlignVertical: 'top' 
  },
  attachButton: {
    position: 'absolute',
    bottom: 12,
    right: 15,
    opacity: 0.9
  }
});

export default InputArea;