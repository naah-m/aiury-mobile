import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginReal, atualizarUsuario as atualizarUsuarioService } from '../services/authService';

export interface User {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  celular: string;
  estado: string;
  cidade: string;
  emailRecuperacao?: string;
  foto_uri: string | null;
  role: 'user' | 'helper';
  status?: string;
}

interface AuthContextData {
  user: User | null;
  userToken: string | null;
  isLoading: boolean;
  login: (celular: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  atualizarPerfil: (idUsuario: string, dadosAtualizados: Partial<User>) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storageToken = await AsyncStorage.getItem('@Aiury:token');
        const storageUser = await AsyncStorage.getItem('@Aiury:user');

        if (storageToken && storageUser) {
          setUserToken(storageToken);
          setUser(JSON.parse(storageUser));
        }
      } catch (error) {
        console.error('Erro ao resgatar dados', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStorageData();
  }, []);

  const login = async (celular: string, senha: string) => {
    const response = await loginReal(celular, senha);
    
    setUserToken(response.token);
    setUser(response.user);

    await AsyncStorage.setItem('@Aiury:token', response.token);
    await AsyncStorage.setItem('@Aiury:user', JSON.stringify(response.user));
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@Aiury:token');
    await AsyncStorage.removeItem('@Aiury:user');
    setUserToken(null);
    setUser(null);
  };

  const atualizarPerfil = async (idUsuario: string, dadosAtualizados: Partial<User>) => {
    const usuarioAtualizado = await atualizarUsuarioService(idUsuario, dadosAtualizados);
    setUser(usuarioAtualizado);
    await AsyncStorage.setItem('@Aiury:user', JSON.stringify(usuarioAtualizado));
  };

  return (
    <AuthContext.Provider value={{ userToken, user, isLoading, login, logout, atualizarPerfil }}>
      {children}
    </AuthContext.Provider>
  );
};