import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { MainStackParamList } from '../navigation/types'; 
import { useAuth } from '../hooks/useAuth';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { maskDate, maskPhone } from '../utils/masks';
import GlobalButton from '../components/common/GlobalButton'; 
import InputText from '../components/common/InputText';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/alterCad.styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'AlteracaoCadastral'>;

const AlteracaoCadastralScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { user } = useAuth(); 

  const { mutateAsync: atualizarPerfilMutate, isPending } = useUpdateProfile();

  const [isEditing, setIsEditing] = useState(false);

  const [nome, setNome] = useState(user?.nome || '');
  const [dataNascimento, setDataNascimento] = useState(maskDate(user?.dataNascimento || ''));
  const [celular, setCelular] = useState(maskPhone(user?.celular || ''));
  const [estado, setEstado] = useState(user?.estado || '');
  const [cidade, setCidade] = useState(user?.cidade || '');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (user) {
      setNome(user.nome || '');
      setCelular(maskPhone(user.celular || ''));
      setDataNascimento(maskDate(user.dataNascimento || ''));
      setEstado(user.estado || '');
      setCidade(user.cidade || '');
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!nome || !celular) {
      Alert.alert('Atenção', 'Nome e celular são obrigatórios.');
      return;
    }

    try {
      if (user) {
        await atualizarPerfilMutate({
          nome,
          dataNascimento: dataNascimento.replace(/\D/g, ''),
          celular: celular.replace(/\D/g, ''),
          estado,
          cidade
        });
        setIsEditing(false);
        Alert.alert('Sucesso', 'Seus dados foram atualizados.');
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível atualizar seus dados.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alteração Cadastral</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          <Text style={styles.descriptionText}>
            Caso tenha alguma alteração em suas informações, realize a edição dos mesmos aqui
          </Text>

          <View style={styles.formContainer}>
            <InputText 
              label="Nome" 
              value={nome} 
              onChangeText={setNome} 
              editable={isEditing && !isPending}
            />
            <InputText 
              label="Data de Nascimento" 
              value={dataNascimento} 
              onChangeText={(t) => setDataNascimento(maskDate(t))}
              editable={isEditing && !isPending}
              keyboardType="numeric"
            />
            <InputText 
              label="Celular" 
              value={celular} 
              onChangeText={(t) => setCelular(maskPhone(t))}
              editable={isEditing && !isPending}
              keyboardType="numeric"
            />
            <InputText 
              label="Estado" 
              value={estado} 
              onChangeText={setEstado} 
              editable={isEditing && !isPending}
            />
            <InputText 
              label="Cidade" 
              value={cidade} 
              onChangeText={setCidade} 
              editable={isEditing && !isPending}
            />
          </View>

          <View style={styles.buttonContainer}>
            {!isEditing ? (
              <GlobalButton 
                title="EDITAR" 
                onPress={handleEdit} 
              />
            ) : (
              <GlobalButton 
                title="SALVAR" 
                onPress={handleSave} 
                isLoading={isPending}
              />
            )}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlteracaoCadastralScreen;