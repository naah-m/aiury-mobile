import { useMutation } from '@tanstack/react-query';
import { enviarReport } from '../services/reportService'; 

export const useCreateReport = () => {
  return useMutation({
    mutationFn: async (reportData: any) => {
      return enviarReport(reportData);
    }
  });
};