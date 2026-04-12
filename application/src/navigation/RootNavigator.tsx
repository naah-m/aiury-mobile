import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { useAuth } from '../hooks/useAuth';
import AuthNavigator from './AuthNavigator'; 
import MainStackNavigator from './MainStackNavigator';
import TermoScreen from '../screens/TermoScreen';
import { Colors } from '../styles/theme/colors';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {

  const { userToken, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.purpleDark }}>
        <ActivityIndicator size="large" color={Colors.tealDark} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        {userToken == null ? (
          <RootStack.Screen name='Auth' component={AuthNavigator} />
        ) : (
          <RootStack.Screen name='Main' component={MainStackNavigator} />
        )}

        <RootStack.Screen name='Termos' component={TermoScreen} />
        
      </RootStack.Navigator>
      
    </NavigationContainer>
  );
};

export default RootNavigator;