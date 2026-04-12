import React, { useState, useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { MainStackParamList } from '../navigation/types';
import { useAuth } from '../hooks/useAuth'; 
import GlobalButton from '../components/common/GlobalButton'; 
import InputArea from '../components/item/InputArea';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/opiniao.styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Opiniao'>;
type Role = 'Usuário' | 'Ajudante';

const OpiniaoScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();
  const { user } = useAuth(); 
  
  const initialRole: Role = user?.role === 'helper' ? 'Ajudante' : 'Usuário';
  const [selectedRole, setSelectedRole] = useState<Role | null>(initialRole);
  const [descricao, setDescricao] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleEnviar = () => {
    if (!selectedRole || !descricao) {
      Alert.alert('Formulário Incompleto', 'Por favor, escreva uma opinião.');
      return;
    }

    console.log('Enviando Opinião:', { selectedRole, descricao });
    Alert.alert('Obrigado!', 'Sua opinião foi enviada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() } 
    ]);
  };

  const ToggleButton = ({ label, isSelected, onPress }: { label: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity 
      style={[styles.toggleButton, isSelected ? styles.toggleButtonSelected : styles.toggleButtonUnselected]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.toggleButtonText, isSelected ? styles.toggleTextSelected : styles.toggleTextUnselected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mande sua opinião</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          <Text style={styles.label}>Você se enquadra como...?</Text>
          <View style={styles.toggleGroup}>
            <ToggleButton 
              label="Usuário" 
              isSelected={selectedRole === 'Usuário'} 
              onPress={() => setSelectedRole('Usuário')} 
            />
            <ToggleButton 
              label="Ajudante" 
              isSelected={selectedRole === 'Ajudante'} 
              onPress={() => setSelectedRole('Ajudante')} 
            />
          </View>

          <Text style={styles.label}>
            Fique à vontade para fazer reclamações e/ou elogios ao aplicativo e suas funcionalidades
          </Text>
          
          <InputArea
            value={descricao}
            onChangeText={setDescricao}
          />

          <GlobalButton 
            title="ENVIAR" 
            onPress={handleEnviar} 
            style={{ marginTop: 40, marginBottom: 40 }}
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OpiniaoScreen;