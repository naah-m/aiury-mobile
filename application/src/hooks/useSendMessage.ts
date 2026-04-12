import { useMutation, useQueryClient } from '@tanstack/react-query';
import { enviarMensagem } from '../services/chatService';
import { useAuth } from './useAuth';

export const useSendMessage = (roomId: string) => {
  const queryClient = useQueryClient();
  const { userToken, user } = useAuth();

  return useMutation({
    mutationFn: (text: string) => {
      if (!userToken || !user) throw new Error('Usuário não autenticado');
      return enviarMensagem(roomId, user.id, text);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chatMessages', roomId] });
      queryClient.invalidateQueries({ queryKey: ['myChats'] });
    },
  });
};