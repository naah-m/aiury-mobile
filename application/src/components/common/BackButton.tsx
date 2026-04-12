import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/theme/colors';

interface BackButtonProps {
  style?: StyleProp<ViewStyle>;
}

const BackButton: React.FC<BackButtonProps> = ({ style }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={handleGoBack}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <Ionicons name="chevron-back-outline" size={30} color={Colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50, 
    left: 15,
    zIndex: 10,
    padding: 5
  }
});

export default BackButton;