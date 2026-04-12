import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthStackParamList, RootStackParamList } from '../navigation/types';
import { useAuth } from '../hooks/useAuth';
import GlobalButton from '../components/common/GlobalButton';
import InputText from '../components/common/InputText';
import BackButton from '../components/common/BackButton';
import { cadastrarUsuario } from '../services/authService';
import { maskDate, maskPhone } from '../utils/masks';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/cadUs.styles';

type CadastroUsuarioNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, 'CadastroUsuario'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CadastroUsuarioScreen: React.FC = () => {

  const navigation = useNavigation<CadastroUsuarioNavigationProp>();
  const { login } = useAuth();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termos, setTermos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async () => {
    if (!nome || !celular || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem. Por favor, verifique e tente novamente.');
      return;
    }

    if (!termos) {
      Alert.alert('Erro', 'Para prosseguir você deve aceitar os Termos e Condições');
      return;
    }

    setIsLoading(true);
    
    try {
      const celularLimpo = celular.replace(/\D/g, '');
      const dataLimpa = dataNascimento.replace(/\D/g, '');
      
      await cadastrarUsuario({
        nome,
        celular: celularLimpo,
        senha,
        dataNascimento: dataLimpa,
        estado,
        cidade
      });

      Alert.alert(
        'Cadastro Concluído',
        'Sua conta foi criada com sucesso! Faça login para continuar',
        [{ text: 'OK', onPress: () => navigation.navigate('Login' as any) }]
      );

    } catch (error) {
      Alert.alert('Erro ao cadastrar', (error as Error).message);
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

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.headerText}>
          Basta realizar seu cadastro e tudo estará pronto para você!
        </Text>

        <View style={styles.formContainer}>
          
          <InputText label='Nome Completo' value={nome} onChangeText={setNome} autoCapitalize="words" />
          <InputText label='Data de Nascimento' value={dataNascimento} onChangeText={(t) => setDataNascimento(maskDate(t))} keyboardType='numeric'/>
          <InputText label='Celular' value={celular} onChangeText={(t) => setCelular(maskPhone(t))} keyboardType='numeric'/>
          <InputText label='Estado' value={estado} onChangeText={setEstado} autoCapitalize="words" />
          <InputText label='Cidade' value={cidade} onChangeText={setCidade} autoCapitalize="words" />
          <InputText label='Senha' value={senha} onChangeText={setSenha} secureTextEntry={true} />
          <InputText label='Confirmar Senha' value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry={true} />

          <TouchableOpacity 
            style={styles.termos} 
            onPress={() => setTermos(!termos)}
            activeOpacity={0.8}
          >
            <Ionicons name={termos ? 'checkbox' : 'square-outline'} size={24} color={Colors.white} />
            <Text style={styles.termosText}>
              {' '}Aceito e concordo com os{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('Termos')}>
                Termos e Condições
              </Text>
            </Text>
          </TouchableOpacity>
        
        </View>

        <GlobalButton 
          title="Cadastre-se" 
          onPress={handleCadastro} 
          isLoading={isLoading} 
          style={{ marginTop: 15, marginBottom: 20 }} 
        />

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CadastroUsuarioScreen;