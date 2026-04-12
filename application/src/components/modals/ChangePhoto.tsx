import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../../navigation/types';
import { Colors } from '../../styles/theme/colors';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<MainStackParamList, 'ModalUserPhoto'>;

const ChangePhoto: React.FC<Props> = ({ route, navigation }) => {
  const { currentPhotoUrl } = route.params;
  
  const [photoUri, setPhotoUri] = useState(currentPhotoUrl || '');
  const [isPending, setIsPending] = useState(false);
  
  const { atualizarPerfil, user } = useAuth();

  const handleSave = async () => {
    if (!photoUri.trim()) {
      Alert.alert('Aviso', 'A foto não pode ficar vazia.');
      return;
    }

    setIsPending(true);

    try {
      if (user) {
        await atualizarPerfil(user.id, { foto_uri: photoUri });
        Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
        navigation.goBack();
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Falha ao atualizar a foto.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Alterar Foto de Perfil</Text>
        
        <TextInput
          style={styles.input}
          value={photoUri}
          onChangeText={setPhotoUri}
          placeholder="Cole o link da nova foto..."
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

export default ChangePhoto;