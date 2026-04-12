import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './useAuth';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { user, atualizarPerfil } = useAuth();

  return useMutation({
    mutationFn: async (dadosAtualizados: any) => {
      if (!user) throw new Error('Usuário não autenticado');
      return atualizarPerfil(user.id, dadosAtualizados);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
  });
};