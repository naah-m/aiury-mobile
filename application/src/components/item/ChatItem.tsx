import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/theme/colors';

interface ChatItemProps {
  name: string;
  timeAgo?: string;
  lastMessage: string;
  onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, timeAgo, lastMessage, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name="person-circle-outline" size={30} color={Colors.black} style={styles.profileIcon} />
      
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.messageText} numberOfLines={1}>{lastMessage}</Text>
      </View>
      
      <View style={styles.info}>
        <AntDesign name="clock-circle" size={16} color={Colors.black} style={styles.icon} />
        <Text style={styles.timeText}>{timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.purpleLight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center'
  },
  profileIcon: {
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    marginRight: 10
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    flex: 1
  },
  messageText: {
    fontSize: 14,
    color: Colors.black,
    opacity: 0.7
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 5
  },
  timeText: {
    fontSize: 14,
    color: Colors.white
  }
});

export default ChatItem;