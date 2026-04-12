import React, { use, useEffect, useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import api from '../services/api';
import { RootStackParamList } from '../navigation/types';
import Button from '../components/common/GlobalButton';
import { Colors } from '../styles/theme/colors';
import styles from '../styles/termo.styles';

type TermoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Termos'>;

interface SecaoTermo {
    id: string;
    titulo: string;
    texto: string;
}

interface TermosData {
    versao: string;
    data_atualizacao: string;
    secoes: SecaoTermo[];
}

const TermoScreen: React.FC = () => {
    const navigation = useNavigation<TermoScreenNavigationProp>();
    
    const [termos, setTermos] = useState<TermosData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const carregarTermos = async () => {
            try {
                const response = await api.get('/api/termos');
                setTermos(response.data);
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível carregar os Termos e Condições no momento.');
            } finally {
                setIsLoading(false);
            }
        };

        carregarTermos();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}> Termos e Condições </Text>
            </View>

            {isLoading ? (
                <View style={[styles.scroll, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color={Colors.tealDark} />
                </View>
            ) : (
                <ScrollView 
                    style={styles.scroll} 
                    contentContainerStyle={styles.scrollContent} 
                    showsVerticalScrollIndicator={true}
                >
                    {termos?.secoes.map((secao) => (
                        <View key={secao.id}>
                            <Text style={styles.sectionTitle}> {secao.titulo} </Text>
                            <Text style={styles.body}> {secao.texto} </Text>
                        </View>
                    ))}

                    {termos?.data_atualizacao && (
                        <Text style={{ marginTop: 20, marginLeft: 10 ,color: Colors.grayDarker, fontStyle: 'italic' }}>
                            Última atualização: {termos.data_atualizacao}
                        </Text>
                    )}
                </ScrollView>
            )}

            <View style={styles.footer}>
                <Button title='Fechar' onPress={() => navigation.goBack()}/>
            </View>
        </SafeAreaView>
    )
};

export default TermoScreen;