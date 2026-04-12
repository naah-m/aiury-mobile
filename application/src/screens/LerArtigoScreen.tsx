import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { ArtigoStackParamList } from '../navigation/types';
import styles from '../styles/lerArtigo.styles';
import { Colors } from '../styles/theme/colors';

type LerArtigoScreenRouteProp = RouteProp<ArtigoStackParamList, 'LerArtigoScreen'>;

const LerArtigoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<LerArtigoScreenRouteProp>();
  
  const { titulo, conteudo } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.purpleDark + '80'} translucent={false} />

      <View style={[styles.customHeader, { paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 15 : 15 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <Ionicons name="chevron-back" size={28} color={Colors.white} />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
           <Text style={styles.headerTitle} numberOfLines={1}>
             Artigo
           </Text>
        </View>
        
        <View style={{ width: 38 }} /> 
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.articleTitle}>{titulo}</Text>
        <Text style={styles.articleBody}>{conteudo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LerArtigoScreen;