import { useQuery } from '@tanstack/react-query';
import { buscarMensagens } from '../services/chatService';
import { useAuth } from './useAuth';

export const useChatMessages = (roomId: string) => {
  const { userToken } = useAuth();

  return useQuery({
    queryKey: ['chatMessages', roomId],
    queryFn: () => {
      if (!userToken) throw new Error('Usuário não autenticado');
      return buscarMensagens(roomId);
    },
    enabled: !!userToken && !!roomId,
    refetchInterval: 3000,
  });
};