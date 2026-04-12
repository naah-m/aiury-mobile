import React, { useState } from 'react';
import { Text, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from '../hooks/useAuth';
import GlobalButton from '../components/common/GlobalButton';
import InputText from '../components/common/InputText';
import BackButton from '../components/common/BackButton';
import { maskPhone } from '../utils/masks'; 
import styles from '../styles/login.styles';

const LoginScreen: React.FC = () => {
  
  const { login } = useAuth();
  
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    
    if (!celular || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    
    setIsLoading(true);
  
    try {
      const celularLimpo = celular.replace(/\D/g, '');
      await login(celularLimpo, senha);
    } catch (error) {
      Alert.alert('Erro no Login', (error as Error).message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.flexContainer} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <BackButton />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}> Login </Text>
        <Text style={styles.subHeaderText}> Insira seus dados cadastrados para continuar </Text>
        
        <InputText
          label="Celular"
          value={celular}
          onChangeText={(texto) => setCelular(maskPhone(texto))} 
          keyboardType="numeric"
          editable={!isLoading}
        />

        <InputText
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          editable={!isLoading}
        />
        
        <GlobalButton 
          title="ENTRAR" 
          onPress={handleLogin} 
          isLoading={isLoading} 
          style={{ marginTop: 20 }} 
        />

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;