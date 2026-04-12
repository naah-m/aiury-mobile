import api from './api';

export const buscarArtigos = async () => {
  try {
    const response = await api.get('/api/artigos');
    return response.data;
  } catch (error: any) {
    console.error('Erro no articleService:', error.response?.data || error.message);
    throw new Error('Não foi possível carregar os artigos.');
  }
};