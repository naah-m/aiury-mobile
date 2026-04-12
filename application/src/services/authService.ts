import api from './api';

export const loginReal = async (celular: string, senha: string) => {
  try {
    const response = await api.post('/api/login', { celular, senha });
    return {
      token: response.data.token,
      user: response.data.user
    };
  } catch (error: any) {
    console.error('Erro no authService:', error.response?.data || error.message);
    throw new Error('Erro ao fazer login. Verifique suas credenciais.');
  }
};

export const atualizarUsuario = async (idUsuario: string, dadosAtualizados: any) => {
  try {
    const response = await api.put(`/api/usuarios/${idUsuario}`, dadosAtualizados);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar usuário:', error.response?.data || error.message);
    throw new Error('Falha ao atualizar dados do usuário.');
  }
};

export const excluirConta = async (idUsuario: string, senhaConfirmacao: string) => {
  try {
    const response = await api.delete(`/api/usuarios/${idUsuario}`, {
      data: { senha: senhaConfirmacao } 
    });
    return response.data;
  } catch (error: any) {
    console.error('Erro ao excluir conta:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Falha ao excluir a conta. Verifique sua senha e tente novamente.');
  }
};

export const cadastrarUsuario = async (dados: any) => {
  try {
    const response = await api.post('/api/usuarios', dados);
    return response.data;
  } catch (error: any) {
    throw new Error('Falha ao realizar cadastro. Tente novamente.');
  }
};

export const cadastrarAjudante = async (dados: any) => {
  try {
    const response = await api.post('/api/ajudantes', dados);
    return response.data;
  } catch (error: any) {
    throw new Error('Falha ao enviar solicitação de cadastro.');
  }
};