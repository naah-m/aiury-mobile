import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ArtigosScreen from '../screens/ArtigosScreen';
import LerArtigoScreen from '../screens/LerArtigoScreen';
import { ArtigoStackParamList } from './types';

const Stack = createNativeStackNavigator<ArtigoStackParamList>();

const ArtigoStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArtigosScreen" component={ArtigosScreen} />
      <Stack.Screen name="LerArtigoScreen" component={LerArtigoScreen} />
    </Stack.Navigator>
  );
};

export default ArtigoStack;