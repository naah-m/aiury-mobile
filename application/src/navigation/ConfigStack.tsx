import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfigScreen from '../screens/ConfigScreen';
import ConfigGeraisScreen from '../screens/ConfigGeraisScreen';
import PrivacidadeScreen from '../screens/PrivacidadeScreen';
import AcessibilidadeScreen from '../screens/AcessibilidadeScreen';
import AjudaScreen from '../screens/AjudaScreen';
import OpiniaoScreen from '../screens/OpiniaoScreen';
import EmailRecuperacaoScreen from '../screens/EmailRecuperacaoScreen';
import { ConfigStackParamList } from './types';

const Stack = createNativeStackNavigator<ConfigStackParamList>();

const ConfigStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
      <Stack.Screen name="ConfigGeraisScreen" component={ConfigGeraisScreen} />
      <Stack.Screen name="PrivacidadeScreen" component={PrivacidadeScreen} />
      <Stack.Screen name="AcessibilidadeScreen" component={AcessibilidadeScreen} />
      <Stack.Screen name="AjudaScreen" component={AjudaScreen} />
      <Stack.Screen name="OpiniaoScreen" component={OpiniaoScreen} />
      <Stack.Screen name="EmailRecuperacaoScreen" component={EmailRecuperacaoScreen} />
    </Stack.Navigator>
  );
};

export default ConfigStack;