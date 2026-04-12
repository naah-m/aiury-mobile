import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Platform, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../styles/theme/colors';
import styles from '../styles/acessibilidade.styles';

const AcessibilidadeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleToggleContraste = () => {
    Alert.alert(
      'Em breve!',
      'A funcionalidade de Alto Contraste está em desenvolvimento e estará disponível nas próximas atualizações.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Acessibilidade</Text>

        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        
        <View style={styles.optionRow}>
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Aumentar Contraste</Text>
            <Text style={styles.optionSubtitle}>Ajuste as cores principais para melhorar a visibilidade</Text>
          </View>
          
          <Switch
            trackColor={{ false: Colors.grayDark, true: Colors.tealDark }}
            thumbColor={Colors.grayLighter}
            onValueChange={handleToggleContraste}
            value={false}
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default AcessibilidadeScreen;