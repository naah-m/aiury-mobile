import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';  

import { AuthStackParamList, RootStackParamList } from '../navigation/types';
import GlobalButton from '../components/common/GlobalButton'; 
import InputText from '../components/common/InputText';
import BackButton from '../components/common/BackButton';
import { maskDate, maskPhone } from '../utils/masks'; 
import { Colors } from '../styles/theme/colors';
import styles from '../styles/cadAj.styles';

import { useCreateAjudante } from '../hooks/useCreateAjudante';

type NavigationProp = CompositeNavigationProp<NativeStackNavigationProp<AuthStackParamList, 'CadastroAjudante'>, NativeStackNavigationProp<RootStackParamList>>;

const CadastroAjudanteScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState(''); 
  const [celular, setCelular] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [areaAtuacao, setAreaAtuacao] = useState('');
  const [motivacao, setMotivacao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState(''); 
  const [termos, setTermos] = useState(false);
  
  const { mutateAsync: criarAjudante, isPending } = useCreateAjudante();
  
  const handleCadastroAjudante = async () => {
    if (!nome || !celular || !senha || !motivacao) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    if(!termos) {
      Alert.alert('Erro', 'Para prosseguir você deve aceitar os Termos e Condições');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas precisam ser iguais');
      return;
    }

    try {
      const celularLimpo = celular.replace(/\D/g, '');
      const dataLimpa = dataNascimento.replace(/\D/g, '');

      await criarAjudante({
        nome,
        celular: celularLimpo,
        senha,
        dataNascimento: dataLimpa,
        estado,
        cidade,
        areaAtuacao,
        motivacao
      });

      navigation.replace('Analise');
    } catch (error: any) {
      Alert.alert('Erro no cadastro', error.message || 'Não foi possível realizar o cadastro.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.flexContainer} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <BackButton />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.headerText}>Após seu cadastro, analisaremos seu perfil e dentro de 3 dias úteis você receberá um SMS informando que poderá entrar em sua conta!</Text>
        
        <View style={styles.formContainer}>
          <InputText label="Nome Completo" value={nome} onChangeText={setNome} autoCapitalize="words" />
          
          <InputText 
            label="Data de Nascimento" 
            value={dataNascimento} 
            onChangeText={(t) => setDataNascimento(maskDate(t))} 
            keyboardType="numeric" 
          />
          
          <InputText 
            label="Celular" 
            value={celular} 
            onChangeText={(t) => setCelular(maskPhone(t))} 
            keyboardType='numeric'
          />
          
          <InputText label="Estado" value={estado} onChangeText={setEstado} autoCapitalize="words" />
          <InputText label="Cidade" value={cidade} onChangeText={setCidade} autoCapitalize="words" />
          <InputText label="Área de Atuação" value={areaAtuacao} onChangeText={setAreaAtuacao} autoCapitalize="words" />
          <InputText label="Descreva sua motivação em fazer parte do nosso time:" value={motivacao} onChangeText={setMotivacao} autoCapitalize="sentences" />
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
          onPress={handleCadastroAjudante} 
          isLoading={isPending}
          style={{ marginTop: 20, marginBottom: 20 }} 
        />
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CadastroAjudanteScreen;