import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Inicio: undefined;
  Login: undefined;
  CadastroUsuario: undefined;
  CadastroAjudante: undefined;
  Analise: undefined;
};

export type ChatStackParamList = {
  ChatScreen: undefined; 
  LoadingScreen: undefined; 
  NewChatScreen: { roomId: string, ajudanteNome: string };
  ReportScreen: { roomId: string };
};

export type MainStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  ConfigGerais: undefined;
  AlteracaoCadastral: undefined;
  Privacidade: undefined;
  EmailRecuperacaoScreen: undefined;
  Acessibilidade: undefined;
  Ajuda: undefined;
  Report: undefined;
  Opiniao: undefined;
  ModalUserName: {currentName: string};
  ModalUserPhoto: {currentPhotoUrl?: string};
};

export type MainTabParamList = {
  HomeScreen: undefined;
  ChatTab: NavigatorScreenParams<ChatStackParamList>;
  ArtigosTab: undefined;
  ConfigTab: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>; 
  Main: NavigatorScreenParams<MainStackParamList>;
  Termos: undefined;
};

export type ArtigoStackParamList = {
  ArtigosScreen: undefined;
  LerArtigoScreen: { artigoId: string | number; titulo: string; conteudo: string };
};

export type ConfigStackParamList = {
  ConfigScreen: undefined;
  ConfigGeraisScreen: undefined;
  PrivacidadeScreen: undefined;
  AcessibilidadeScreen: undefined;
  AjudaScreen: undefined;
  OpiniaoScreen: undefined;
  EmailRecuperacaoScreen: undefined;
};