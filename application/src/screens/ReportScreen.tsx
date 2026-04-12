import React, { useState, useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import * as ImagePicker from 'expo-image-picker';

import { MainStackParamList } from '../navigation/types';
import GlobalButton from '../components/common/GlobalButton'; 
import InputArea from '../components/item/InputArea';
import { useAuth } from '../hooks/useAuth'; 
import { useCreateReport } from '../hooks/useCreateReport'; 
import { Colors } from '../styles/theme/colors'; 
import styles from '../styles/report.styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'Report'>;

type Role = 'Usuário' | 'Ajudante';
type ProblemType = 'Técnico' | 'Reclamação';

const ReportScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();
  const { user } = useAuth(); 
  
  const initialRole: Role = user?.role === 'helper' ? 'Ajudante' : 'Usuário';
  const [selectedRole, setSelectedRole] = useState<Role | null>(initialRole);
  const [selectedType, setSelectedType] = useState<ProblemType | null>(null);
  const [descricao, setDescricao] = useState('');
  const [image, setImage] = useState<string | null>(null); 

  const { mutateAsync: enviarReportMutation, isPending } = useCreateReport();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleAttachPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Para anexar imagens é preciso conceder acesso a sua galeria');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  const handleEnviar = async () => {
    if (!selectedRole || !selectedType || !descricao) {
      Alert.alert('Formulário Incompleto', 'Por favor, preencha todos os campos');
      return;
    }

    try {
      await enviarReportMutation({
        usuarioId: user?.id, 
        role: selectedRole,
        type: selectedType,
        descricao: descricao,
        image: image 
      });
        
      Alert.alert('Obrigado!', 'Seu report foi enviado!', [{text: 'Ok', onPress: () => navigation.goBack()}]);
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível enviar o report.');
    }
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
        <Text style={styles.headerTitle}>Reportar problema</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          <Text style={styles.title}>Você se enquadra como...?</Text>
          <View style={styles.toggleGroup}>
            <ToggleButton label="Usuário" isSelected={selectedRole === 'Usuário'} onPress={() => setSelectedRole('Usuário')} />
            <ToggleButton label="Ajudante" isSelected={selectedRole === 'Ajudante'} onPress={() => setSelectedRole('Ajudante')} />
          </View>

          <Text style={styles.title}>Gostaria de reportar qual tipo de problema?</Text>
          <View style={styles.toggleGroup}>
            <ToggleButton label="Técnico" isSelected={selectedType === 'Técnico'} onPress={() => setSelectedType('Técnico')} />
            <ToggleButton label="Reclamação" isSelected={selectedType === 'Reclamação'} onPress={() => setSelectedType('Reclamação')} />
          </View>

          <Text style={styles.title}>Descreva em poucas palavras sua reclamação. Caso deseje, anexe print(s) do ocorrido.</Text>
          <InputArea 
            value={descricao} 
            onChangeText={setDescricao} 
            placeholder=''
            onAttachPress={handleAttachPress} 
          />
          
          {image && (
            <View style={styles.imageContainer}>
              <Text style={styles.previewText}>Anexo</Text>
              <Image source={{uri: image}} style={styles.image} />
              <TouchableOpacity onPress={() => setImage(null)} style={styles.removeImage} activeOpacity={0.8}>
                <Ionicons name="close-circle" size={30} color={Colors.red} />
              </TouchableOpacity>
            </View>
          )}

          <GlobalButton 
            title="ENVIAR" 
            onPress={handleEnviar} 
            isLoading={isPending}
            style={{ marginTop: 30, marginBottom: 40 }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen;