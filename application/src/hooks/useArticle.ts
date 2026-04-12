import { useQuery } from '@tanstack/react-query';
import { buscarArtigos } from '../services/articleService';
import { useAuth } from './useAuth';

export const useArticles = () => {
  const { userToken } = useAuth();

  return useQuery({
    queryKey: ['articles'],
    queryFn: () => {
      if (!userToken) throw new Error('Usuário não identificado.');
      return buscarArtigos();
    },
    enabled: !!userToken
  });
};