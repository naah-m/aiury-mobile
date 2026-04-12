import api from './api';

export const buscarTermos = async () => {
  try {
    const response = await api.get('/api/termos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar termos e condições:', error);
    throw new Error('Não foi possível carregar os termos e condições do aplicativo.');
  }
};