import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import { excluirConta } from '../services/authService';

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  const { user, logout } = useAuth();

  return useMutation({
    mutationFn: async (senhaConfirmacao: string) => {
      if (!user) throw new Error('Usuário não autenticado');
      
      return excluirConta(user.id, senhaConfirmacao);
    },
    onSuccess: () => {
      queryClient.clear();
      logout();
    }
  });
};