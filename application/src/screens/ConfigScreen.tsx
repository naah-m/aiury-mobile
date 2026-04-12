import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, TextInput, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../hooks/useAuth'; 
import styles from '../styles/config.styles';
import { Colors } from '../styles/theme/colors';

const ConfigScreen = () => {
  const navigation = useNavigation<any>();
  const { user, logout } = useAuth(); 

  const [nomeUsuario, setNomeUsuario] = useState(user?.nome || 'Aiury');
  const [isEditingName, setIsEditingName] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de acesso à sua galeria para alterar a foto.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Tem certeza que deseja sair da sua conta?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => logout && logout() }
    ]);
  };

  const menuOptions = [
    { 
      id: 1, 
      title: 'Configurações gerais', 
      subtitle: 'Notificações, Alteração cadastral, Apagar conta', 
      icon: 'settings-outline', 
      action: () => navigation.navigate('ConfigGeraisScreen') 
    },
    { 
      id: 2, 
      title: 'Privacidade', 
      subtitle: 'Desbloqueio por biometria, Confirmação em duas etapas, E-mail de recuperação', 
      icon: 'lock-closed-outline', 
      action: () => navigation.navigate('PrivacidadeScreen') 
    },
    { 
      id: 3, 
      title: 'Acessibilidade', 
      subtitle: 'Aumentar contraste', 
      icon: 'hand-left-outline', 
      action: () => navigation.navigate('AcessibilidadeScreen') 
    },
    { 
      id: 4, 
      title: 'Ajuda', 
      subtitle: 'Reportar problema, Termos e Condições', 
      icon: 'help-circle-outline', 
      action: () => navigation.navigate('AjudaScreen') 
    },
    { 
      id: 5, 
      title: 'Mande sua opinião!', 
      subtitle: '', 
      icon: 'chatbox-ellipses-outline', 
      action: () => navigation.navigate('OpiniaoScreen') 
    },
    { 
      id: 6, 
      title: 'Sair', 
      subtitle: '', 
      icon: 'close-circle-outline', 
      action: handleLogout 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} />

      <View style={styles.headerSection}>
        <TouchableOpacity style={styles.avatarContainer} onPress={pickImage} activeOpacity={0.8}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatarImage} />
          ) : (
            <Ionicons name="flower-outline" size={50} color={Colors.white} />
          )}
        </TouchableOpacity>

        <View style={styles.nameContainer}>
          {isEditingName ? (
            <TextInput
              style={styles.nameInput}
              value={nomeUsuario}
              onChangeText={setNomeUsuario}
              autoFocus
              onBlur={() => setIsEditingName(false)} 
              onSubmitEditing={() => setIsEditingName(false)} 
            />
          ) : (
            <>
              <Text style={styles.userName}>{nomeUsuario}</Text>
              <TouchableOpacity onPress={() => setIsEditingName(true)} style={styles.editIcon}>
                <Ionicons name="create-outline" size={22} color={Colors.grayDarker} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
        {menuOptions.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.menuItem} 
            onPress={item.action}
            activeOpacity={0.6}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={26} color={Colors.tealDark} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              {item.subtitle ? (
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              ) : null}
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>

    </SafeAreaView>
  );
};

export default ConfigScreen;