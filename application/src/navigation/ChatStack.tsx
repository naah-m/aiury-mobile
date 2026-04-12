import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatStackParamList } from './types';
import ChatScreen from '../screens/ChatScreen';
import LoadingScreen from '../screens/LoadingScreen';
import NewChatScreen from '../screens/NewChatScreen';
import ReportScreen from '../screens/ReportScreen';

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />      
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="NewChatScreen" component={NewChatScreen} />
      <Stack.Screen name="ReportScreen" component={ReportScreen} />  
    </Stack.Navigator>
  );
};

export default ChatStack;