import React, { ComponentProps } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/theme/colors';

interface ConfigItemProps {
  label: string;
  icon: ComponentProps<typeof Ionicons>['name']; 
  subtitle?: string;
  isLogout?: boolean;
  onPress: () => void;
}

const ConfigItem: React.FC<ConfigItemProps> = ({ label, icon, subtitle, isLogout = false, onPress }) => {
  const itemColor = isLogout ? Colors.red : Colors.white;
  const iconColor = isLogout ? Colors.red : Colors.tealDark;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name={icon} size={26} color={iconColor} style={styles.icon} />

      <View style={styles.text}>
        <Text style={[styles.label, { color: itemColor }]}>{label}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayDark
  },
  icon: {
    marginRight: 20,
    width: 30,
    textAlign: 'center'
  },
  text: {
    flex: 1
  },
  label: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    color: Colors.white,
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4
  }
});

export default ConfigItem;