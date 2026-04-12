// Contexto para implementação do tema de alto contraste (a ser utilizado na próxima Sprint)
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Cores padrão
const defaultColors = {
  purpleDark: '#907FA6',
  purpleLight: '#CCABD8',
  tealDark: '#055A5D',
  tealLight: '#08979D',
  inputTeal: '#055a5db0', 
  white: '#FFFFFF',
  black: '#000000',
  red: '#a31919ff',
  grayLight: '#888',
  grayLighter: '#f0f0f0',
  grayDark: '#666',
  grayDarker: '#444',
  overlay: 'rgba(0,0,0,0.5)',
};

// Cores de Alto Contraste
const highContrastColors = {
  purpleDark: '#4A3B69', 
  purpleLight: '#9A7BB5',
  tealDark: '#02383B',   
  tealLight: '#056A6D',
  inputTeal: '#02383B', 
  white: '#FFFFFF',
  black: '#000000',
  red: '#D90000',        
  grayLight: '#444', 
  grayLighter: '#CCC',
  grayDark: '#222',
  grayDarker: '#000',
  overlay: 'rgba(0,0,0,0.8)',
};

type ThemeContextData = {
  isHighContrast: boolean;
  toggleContrast: () => void;
  colors: typeof defaultColors;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      const savedTheme = await AsyncStorage.getItem('@Aiury:highContrast');
      if (savedTheme === 'true') {
        setIsHighContrast(true);
      }
    }
    loadTheme();
  }, []);

  const toggleContrast = async () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    await AsyncStorage.setItem('@Aiury:highContrast', String(newValue));
  };

  const colors = isHighContrast ? highContrastColors : defaultColors;

  return (
    <ThemeContext.Provider value={{ isHighContrast, toggleContrast, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}