import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../../navigation/types';
import { Colors } from '../../styles/theme/colors';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<MainStackParamList, 'ModalUserName'>;

const ChangeName: React.FC<Props> = ({ route, navigation }) => {
  const { currentName } = route.params; 
  
  const [newName, setNewName] = useState(currentName);
  const [isPending, setIsPending] = useState(false);
  
  const { atualizarPerfil, user } = useAuth();

  const handleSave = async () => {
    if (!newName.trim()) {
      Alert.alert('Aviso', 'O nome não pode ficar vazio.');
      return;
    }

    setIsPending(true);

    try {
        if (user) {
        await atualizarPerfil(user.id, { nome: newName }); 
        Alert.alert('Sucesso', 'Nome atualizado com sucesso!');
        navigation.goBack(); 
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Falha ao atualizar o nome.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Alterar Nome</Text>
        
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
          placeholder="Digite seu novo nome"
          editable={!isPending}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]} 
            onPress={() => navigation.goBack()} 
            disabled={isPending}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.saveButton]} 
            onPress={handleSave}
            disabled={isPending}
          >
            {isPending ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.saveButtonText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: { 
    flex: 1, 
    backgroundColor: Colors.overlay, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContainer: { 
    width: '85%', 
    backgroundColor: Colors.white, 
    borderRadius: 10, 
    padding: 20 
  },
  modalTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: Colors.black 
  },
  input: { 
    borderWidth: 1, 
    borderColor: Colors.grayLight, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 20, 
    color: Colors.black 
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end' 
  },
  button: { 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    marginLeft: 10 
  },
  cancelButton: { 
    backgroundColor: Colors.grayLighter 
  },
  saveButton: { 
    backgroundColor: Colors.tealLight, 
    minWidth: 80, 
    alignItems: 'center' 
  },
  cancelButtonText: { 
    color: Colors.grayDark 
  },
  saveButtonText: { 
    color: Colors.white, 
    fontWeight: 'bold' 
  }
});

export default ChangeName;