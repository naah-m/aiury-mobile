import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainTabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import ChatStack from './ChatStack'; 
import ArtigoStack from './ArtigoStack';
import ConfigStack from './ConfigStack';
import { Colors } from '../styles/theme/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { 
            backgroundColor: Colors.purpleDark, 
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 85 : 65,
            paddingBottom: Platform.OS === 'ios' ? 30 : 10,
            paddingTop: 5,
        },
        tabBarActiveTintColor: Colors.tealDark,
        tabBarInactiveTintColor: Colors.white,

        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'HomeScreen') iconName = 'home';
          else if (route.name === 'ChatTab') iconName = 'chatbubbles';
          else if (route.name === 'ArtigosTab') iconName = 'folder';
          else if (route.name === 'ConfigTab') iconName = 'settings';
          else iconName = 'alert-circle';
          
          return <Ionicons name={iconName} size={size + 2} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'home' }} />
      <Tab.Screen name="ChatTab" component={ChatStack} options={{ title: 'chat' }} />
      <Tab.Screen name="ArtigosTab" component={ArtigoStack} options={{ title: 'arquivos' }} />
      <Tab.Screen name="ConfigTab" component={ConfigStack} options={{ title: 'configuracoes' }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;