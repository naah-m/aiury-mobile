import React, { ComponentProps } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../styles/theme/colors'; 

interface InfoTabProps {
  title: string;
  text: string;
  icon: ComponentProps<typeof Ionicons>['name']; 
}

const InfoTab: React.FC<InfoTabProps> = ({ title, text, icon }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name={icon} size={60} color={Colors.tealDark} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.purpleLight, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    lineHeight: 24
  }
});

export default InfoTab;