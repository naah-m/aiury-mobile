import api from './api';

export const enviarReport = async (dados: any) => {
  try {
    const response = await api.post('/api/reports', dados);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao enviar report:', error.response?.data || error.message);
    throw new Error('Falha ao enviar sua denúncia. Tente novamente.');
  }
};