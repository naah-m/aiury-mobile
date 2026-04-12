import { useQuery } from '@tanstack/react-query';
import { buscarChats } from '../services/chatService';
import { useAuth } from './useAuth';

export const useChats = () => {
  const { userToken, user } = useAuth();

  return useQuery({
    queryKey: ['myChats', userToken],
    queryFn: () => {
      if (!userToken || !user) throw new Error('Usuário não autenticado');
      return buscarChats(userToken);
    },
    enabled: !!userToken && !!user,
  });
};