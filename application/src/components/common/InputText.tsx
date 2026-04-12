import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
import { Colors } from '../../styles/theme/colors';

interface InputTextProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  style?: StyleProp<TextStyle>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const InputText: React.FC<InputTextProps> = ({ 
  label, 
  value, 
  onChangeText, 
  keyboardType = 'default', 
  placeholder,
  secureTextEntry = false,
  editable = true,
  style,
  autoCapitalize = 'none',
}) => {

  return (
    <View style={styles.group}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        style={[styles.input, !editable && styles.disable, style]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={Colors.white + '99'}
        secureTextEntry={secureTextEntry}
        editable={editable}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    marginBottom: 15, 
    width: '100%'
  },
  label: {
    color: Colors.black, 
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: '500'
  },
  input: {
    width: '100%',
    height: 45, 
    backgroundColor: Colors.inputTeal,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 15,
    color: Colors.white
  },
  disable: {
    opacity: 0.7
  }
});

export default InputText;