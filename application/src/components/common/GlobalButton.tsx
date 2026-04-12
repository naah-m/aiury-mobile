import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import { Colors } from '../../styles/theme/colors';

interface GlobalButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  isLoading?: boolean;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  disabled, 
  isLoading = false 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style, (disabled || isLoading) && styles.buttonDisabled]} 
      onPress={onPress} 
      disabled={disabled || isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.white} size="small" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.tealDark,
    paddingVertical: 12, 
    borderRadius: 20, 
    minWidth: 160, 
    alignSelf: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, 
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 10
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14, 
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  buttonDisabled: {
    opacity: 0.6
  }
});

export default GlobalButton;