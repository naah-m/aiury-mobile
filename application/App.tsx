import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

if (__DEV__) {
  require("./ReactotronConfig");
}

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
    </QueryClientProvider>
  );
}