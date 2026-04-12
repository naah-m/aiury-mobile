import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import InfoTab from '../components/home/InfoTab'; 
import { Colors } from '../styles/theme/colors'; 

export type HomeTabParamList = {
  Motivacao: undefined;
  ComoUsarChat: undefined;
  SobreArtigos: undefined;
};

const Tab = createMaterialTopTabNavigator<HomeTabParamList>();

const HomeTopTabNavigator: React.FC = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.tealDark,
        tabBarInactiveTintColor: Colors.white,
        tabBarIndicatorStyle: { 
          backgroundColor: Colors.tealDark, 
          height: 3 
        },
        tabBarLabelStyle: { 
          fontWeight: 'bold', 
          fontSize: 10,
          textAlign: 'center',
        },
        tabBarStyle: {
          backgroundColor: Colors.purpleDark, 
        },
      }}
    >
      
      <Tab.Screen 
        name="Motivacao"
        options={{ title: 'MOTIVAÇÃO' }}
      >
        {() => (
          <InfoTab 
            title="Motivação do App"
            text="Nossa missão é fornecer um espaço seguro e anônimo para apoio emocional, conectando pessoas que precisam de ajuda a voluntários dispostos a ajudar."
            icon="heart-outline"
          />
        )}
      </Tab.Screen>
      
      <Tab.Screen 
        name="ComoUsarChat"
        options={{ title: 'COMO USAR O CHAT' }}
      >
        {() => (
          <InfoTab 
            title="Como Usar o Chat"
            text="Suas conversas são criptografadas. Ao encerrar, você decide se o histórico é salvo ou apagado permanentemente do seu dispositivo."
            icon="chatbubbles-outline"
          />
        )}
      </Tab.Screen>
      
      <Tab.Screen 
        name="SobreArtigos"
        options={{ title: 'SOBRE OS ARTIGOS' }}
      >
        {() => (
          <InfoTab 
            title="Sobre os Artigos"
            text="A aba 'Arquivos' contém técnicas e artigos revisados por profissionais para te ajudar a lidar com momentos difíceis."
            icon="book-outline"
          />
        )}
      </Tab.Screen>
      
    </Tab.Navigator>
  );
};

export default HomeTopTabNavigator;