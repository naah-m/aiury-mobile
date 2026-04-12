import api from './api';

export const buscarMensagens = async (idChat: string) => {
  try {
    const response = await api.get(`/api/chats/${idChat}/mensagens`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar mensagens:', error.message);
    throw error;
  }
};

export const enviarMensagem = async (idChat: string, idRemetente: string, texto: string) => {
  try {
    const response = await api.post(`/api/chats/${idChat}/mensagens`, {
      remetenteId: idRemetente,
      conteudo: texto
    });
    return response.data;
  } catch (error: any) {
    console.error('Erro ao enviar mensagem:', error.message);
    throw error;
  }
};

export const criarChat = async (idUsuario: string, idAjudante: string) => {
  try {
    const response = await api.post('/api/chats', {
      usuarioId: idUsuario,
      ajudanteId: idAjudante
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar chat:", error.response?.data || error.message);
    throw new Error("Não foi possível iniciar o atendimento.");
  }
};

export const buscarChats = async (idUsuario: string) => {
  try {
    const response = await api.get(`/api/usuarios/${idUsuario}/chats`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar lista de chats:", error.response?.data || error.message);
    throw new Error("Não foi possível carregar suas conversas.");
  }
};