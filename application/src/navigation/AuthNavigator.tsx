import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackParamList } from './types';
import InicioScreen from '../screens/InicioScreen';
import CadastroUsuarioScreen from '../screens/CadastroUsuarioScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroAjudanteScreen from '../screens/CadastroAjudanteScreen';
import AnaliseScreen from '../screens/AnaliseScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='CadastroAjudante' component={CadastroAjudanteScreen} />
      <Stack.Screen name='Analise' component={AnaliseScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;