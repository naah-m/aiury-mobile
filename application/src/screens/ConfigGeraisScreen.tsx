import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert, SafeAreaView, StatusBar, Platform, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import { MainStackParamList } from '../navigation/types';
import { useDeleteAccount } from '../hooks/useDeleteAccount'; 
import InputText from '../components/common/InputText';
import GlobalButton from '../components/common/GlobalButton';
import styles from '../styles/configGeral.styles';
import { Colors } from '../styles/theme/colors'; 

type NavigationProp = NativeStackNavigationProp<MainStackParamList, 'ConfigGerais'>;

const ConfigGeraisScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

  const { mutateAsync: deletarConta, isPending } = useDeleteAccount();

  const handleConfirmarExclusao = async () => {
    if (!senhaConfirmacao) {
      Alert.alert('Erro', 'A senha é obrigatória');
      return;
    }
    
    try {
      await deletarConta(senhaConfirmacao); 
      setModalVisible(false); 
      Alert.alert('Conta Apagada', 'Sua conta foi removida com sucesso.');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível apagar a conta.');
    }
  };
  
  const handleAlteracaoCadastral = () => {
    navigation.navigate('AlteracaoCadastral' as any); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Configurações Gerais</Text>
        
        <View style={{ width: 28 }} /> 
      </View>

      <View style={styles.content}>
         
        <View style={styles.optionRow}>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Notificações</Text>
            <Text style={styles.optionSubtitle}>Mostrar prévia das notificações no topo da tela</Text>
          </View>
          <Switch 
            trackColor={{ false: Colors.grayDark, true: Colors.tealDark }} 
            thumbColor={notificacoesAtivas ? Colors.white : Colors.grayLighter}
            onValueChange={() => setNotificacoesAtivas(!notificacoesAtivas)}
            value={notificacoesAtivas}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>

        <TouchableOpacity 
          style={styles.optionRow} 
          onPress={handleAlteracaoCadastral}
          activeOpacity={0.6}
        >
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Alteração Cadastral</Text>
            <Text style={styles.optionSubtitle}>Altere seus dados iniciais</Text>
          </View>
          <Ionicons name="send-outline" size={20} color={Colors.tealDark} style={{ transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.optionRow, { marginTop: 10 }]} 
          onPress={() => setModalVisible(true)} 
          activeOpacity={0.6}
        >
          <View style={styles.textContainer}>
            <Text style={[styles.optionTitle, styles.dangerText]}>Apagar Conta</Text>
            <Text style={[styles.subtitle, styles.dangerText]}>Apague todos seus dados</Text>
          </View>
          <Ionicons name="trash-outline" size={22} color={Colors.red} />
        </TouchableOpacity>

      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', padding: 20 }}>
          <View style={{ backgroundColor: Colors.purpleLight, padding: 25, borderRadius: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.black, marginBottom: 10 }}>
              Apagar Conta
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 20 }}>
              Esta ação é irreversível. Para confirmar, digite sua senha:
            </Text>
            
            <InputText 
              label="Senha" 
              value={senhaConfirmacao} 
              onChangeText={setSenhaConfirmacao} 
              secureTextEntry={true} 
            />
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ padding: 10 }}>
                <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '500' }}>Cancelar</Text>
              </TouchableOpacity>
              
              <View style={{ width: 140 }}>
                <GlobalButton 
                  title="APAGAR" 
                  onPress={handleConfirmarExclusao} 
                  isLoading={isPending}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default ConfigGeraisScreen;