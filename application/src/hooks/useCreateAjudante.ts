import { useMutation } from '@tanstack/react-query';
import { cadastrarAjudante } from '../services/authService';

export const useCreateAjudante = () => {
  return useMutation({
    mutationFn: async (dadosAjudante: any) => {
      return cadastrarAjudante(dadosAjudante);
    }
  });
};