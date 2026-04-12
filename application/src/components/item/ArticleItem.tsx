import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles/theme/colors';

interface ArticleItemProps {
  title: string;
  timeAgo: string;
  onPress: () => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, timeAgo, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Saiba mais...</Text>
        <Text style={styles.timeText}>{timeAgo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 25    
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  button: {
    backgroundColor: Colors.tealLight,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  timeText: {
    color: Colors.white,
    fontSize: 14,
    opacity: 0.8,
  }
});

export default ArticleItem;