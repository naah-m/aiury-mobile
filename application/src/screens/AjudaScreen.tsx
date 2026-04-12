import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { MainStackParamList, RootStackParamList } from '../navigation/types';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/ajuda.styles';

type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList, 'Ajuda'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const AjudaScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.purpleDark} translucent={false} />

      <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={Colors.tealDark} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Ajuda</Text>

        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        
        <TouchableOpacity 
          style={styles.optionRow} 
          onPress={() => navigation.navigate('Report')}
          activeOpacity={0.6}
        >
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Reportar um Problema</Text>
            <Text style={styles.optionSubtitle}>Relate um problema técnico ou reclamação</Text>
          </View>
          <Ionicons name="send-outline" size={20} color={Colors.tealDark} style={{ transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionRow} 
          onPress={() => navigation.navigate('Termos')}
          activeOpacity={0.6}
        >
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>Termos e Condições</Text>
            <Text style={styles.optionSubtitle}>Revisite os Termos e Condições</Text>
          </View>
          <Ionicons name="send-outline" size={20} color={Colors.tealDark} style={{ transform: [{ rotate: '-45deg' }] }} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default AjudaScreen;