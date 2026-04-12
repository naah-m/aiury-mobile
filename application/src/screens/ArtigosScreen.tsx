import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { buscarArtigos } from '../services/articleService';
import styles from '../styles/artigo.styles';
import { Colors } from '../styles/theme/colors';

const ArtigosScreen = () => {
  const navigation = useNavigation<any>();
  const [artigos, setArtigos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const carregarArtigos = async () => {
      try {
        const data = await buscarArtigos();
        setArtigos(data);
      } catch (error) {
        console.error("Erro ao carregar artigos", error);
      } finally {
        setIsLoading(false);
      }
    };
    carregarArtigos();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.articleWrapper}>
      <Text style={styles.articleTitle}>{item.title}</Text>

      <TouchableOpacity
        style={styles.articleCard}
        onPress={() => {
          navigation.navigate('LerArtigoScreen', { 
            artigoId: item.id,
            titulo: item.title,
            conteudo: item.content
          });
        }}
        activeOpacity={0.8}
      >
        <Text style={styles.saibaMaisText}>Saiba mais...</Text>
        <Text style={styles.dateText}>1d atrás</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8E7DA1" />

      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>ARTIGOS</Text>
        <Text style={styles.headerText}>
          Aqui você encontra artigos contendo técnicas e outras informações que possam te ajudar
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.tealDark} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={artigos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default ArtigosScreen;