import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../navigation/types';
import GlobalButton from '../components/common/GlobalButton';
import styles from '../styles/inicio.styles';

type InicioNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Inicio'>;

const InicioScreen: React.FC = () => {

  const navigation = useNavigation<InicioNavigationProp>();

  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <Image 
          source={require('../assets/image/logotipo_white.png')} 
          style={styles.logo}
        />
        <Text style={styles.subtitle}> Um aplicativo para quem precisa </Text>
      </View>

      <GlobalButton title='LOGIN' onPress={() => navigation.navigate('Login')}/>

      <View style={styles.bottomSection}>
        <Text style={styles.text}>Ainda não está cadastrado?</Text>
        
        <GlobalButton title='PRECISO DE AJUDA' onPress={() => navigation.navigate('CadastroUsuario')} />
        <GlobalButton title='QUERO AJUDAR' onPress={() => navigation.navigate('CadastroAjudante')} />
      </View>

    </View>
  );
};

export default InicioScreen;