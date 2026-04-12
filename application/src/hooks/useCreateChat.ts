import { useMutation, useQueryClient } from '@tanstack/react-query';
import { criarChat } from '../services/chatService';
import { useAuth } from './useAuth';

export const useCreateChat = () => {
  const queryClient = useQueryClient();
  const { userToken, user } = useAuth();

  return useMutation({
    mutationFn: (idAjudante: string) => {
      if (!userToken || !user) throw new Error('Usuário não autenticado');
      return criarChat(userToken, idAjudante);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myChats', userToken] });
    },
  });
};