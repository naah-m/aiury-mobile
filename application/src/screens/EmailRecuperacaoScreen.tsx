import React, { useState } from 'react';
import { View, Text, Alert, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { ConfigStackParamList } from '../navigation/types';
import { useAuth } from '../hooks/useAuth'; 
import GlobalButton from '../components/common/GlobalButton'; 
import InputText from '../components/common/InputText';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/email.styles';

type NavigationProp = NativeStackNavigationProp<ConfigStackParamList, 'EmailRecuperacaoScreen'>;

const EmailRecuperacaoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { user, atualizarPerfil } = useAuth();

  const [email, setEmail] = useState(user?.emailRecuperacao || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmar = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Atenção', 'Por favor, insira um e-mail válido.');
      return;
    }

    setIsLoading(true);

    try {
      if (user) {
        await atualizarPerfil(user.id, { emailRecuperacao: email });
        Alert.alert('Sucesso', 'E-mail de recuperação salvo!', [
          { text: 'OK', onPress: () => navigation.goBack() }
        ]);
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível salvar o e-mail.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>E-mail de Recuperação</Text>
        
        <View style={{ width: 28 }} /> 
      </View>

      <View style={styles.content}>
        
        <Text style={styles.descriptionText}>
          Caso perca o acesso a sua conta, tenha facilidade em acessá-la novamente ao criar um e-mail de recuperação
        </Text>

        <View style={styles.formContainer}>
          <InputText 
            label="E-mail:"
            value={email} 
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

        <GlobalButton 
          title="CONFIRMAR"
          onPress={handleConfirmar}
          disabled={!email || isLoading}
          isLoading={isLoading}
        />

      </View>
    </SafeAreaView>
  );
};

export default EmailRecuperacaoScreen;