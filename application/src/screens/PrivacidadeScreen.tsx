import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, SafeAreaView, StatusBar, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ConfigStackParamList } from '../navigation/types';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/privacidade.styles';

type NavigationProp = NativeStackNavigationProp<ConfigStackParamList, 'PrivacidadeScreen'>;

const PrivacidadeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleFeatureEmBreve = (feature: string) => {
    Alert.alert(
      'Em breve!',
      `A funcionalidade de ${feature} está sendo preparada e estará disponível na próxima atualização.`
    );
  };

  const handleEmailRecuperacao = () => {
    navigation.navigate('EmailRecuperacaoScreen'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacidade</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        
        <View style={styles.optionRow}>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Desbloquear por Biometria</Text>
            <Text style={styles.optionSubtitle}>Com esse recurso ativo, é preciso utilizar impressão digital, reconhecimento facial ou outro meio para acessar o aplicativo</Text>
          </View>
          <Switch
            trackColor={{ false: Colors.grayDark, true: Colors.tealDark }}
            thumbColor={Colors.grayLighter}
            onValueChange={() => handleFeatureEmBreve('Biometria')}
            value={false}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>

        <View style={styles.optionRow}>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Confirmação em Duas Etapas</Text>
            <Text style={styles.optionSubtitle}>Crie um PIN que será solicitado para confirmar sua identidade</Text>
          </View>
          <Switch
            trackColor={{ false: Colors.grayDark, true: Colors.tealDark }}
            thumbColor={Colors.grayLighter}
            onValueChange={() => handleFeatureEmBreve('Confirmação em Duas Etapas')}
            value={false}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>

        <TouchableOpacity style={styles.optionRow} onPress={handleEmailRecuperacao} activeOpacity={0.6}>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>E-mail de Recuperação</Text>
            <Text style={styles.optionSubtitle}>Adicione um e-mail para ajudar a acessar sua conta quando necessário</Text>
          </View>
          <Ionicons name="send-outline" size={20} color={Colors.tealDark} style={{ transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default PrivacidadeScreen;