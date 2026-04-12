import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import { MainStackParamList } from './types';
import ConfigGeraisScreen from '../screens/ConfigGeraisScreen';
import AlteracaoCadastralScreen from '../screens/AlteracaoCadastralScreen';
import PrivacidadeScreen from '../screens/PrivacidadeScreen';
import EmailRecuperacaoScreen from '../screens/EmailRecuperacaoScreen';
import AcessibilidadeScreen from '../screens/AcessibilidadeScreen';
import AjudaScreen from '../screens/AjudaScreen';
import ReportScreen from '../screens/ReportScreen';
import OpniaoScreen from '../screens/OpiniaoScreen';
import ChangeName from '../components/modals/ChangeName';
import ChangePhoto from '../components/modals/ChangePhoto';
import { Colors } from '../styles/theme/colors';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.purpleLight },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerBackTitleStyle: false,
        headerBackVisible: false
      }}
    >
      <Stack.Screen name='MainTabs' component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='ConfigGerais' component={ConfigGeraisScreen} />
      <Stack.Screen name='AlteracaoCadastral' component={AlteracaoCadastralScreen} />
      <Stack.Screen name='Privacidade' component={PrivacidadeScreen} />
      <Stack.Screen name='EmailRecuperacaoScreen' component={EmailRecuperacaoScreen} />
      <Stack.Screen name='Acessibilidade' component={AcessibilidadeScreen} />
      <Stack.Screen name='Ajuda' component={AjudaScreen} />      
      <Stack.Screen name='Report' component={ReportScreen} />
      <Stack.Screen name='Opiniao' component={OpniaoScreen} />
      <Stack.Screen name='ModalUserName' component={ChangeName} options={{presentation: 'transparentModal', headerShown: false}} />
      <Stack.Screen name='ModalUserPhoto' component={ChangePhoto} options={{presentation: 'transparentModal', headerShown: false}} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;