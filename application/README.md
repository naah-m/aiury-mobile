# Aiury - Mobile App (Sprint 3)

## 📝 Descrição do Problema
Muitas pessoas enfrentam dificuldades para encontrar suporte e orientação em momentos de vulnerabilidade ou dúvidas específicas. O Aiury nasce para conectar usuários a ajudantes capacitados, promovendo uma rede de apoio eficiente e segura.

## 💡 Solução Proposta
Uma plataforma mobile cross-platform que permite o cadastro de usuários e ajudantes, comunicação via chat em tempo real e um sistema de suporte robusto. O foco desta Sprint foi a consolidação da arquitetura técnica, garantindo a persistência de dados e a segurança do usuário.

## 🛠 Tecnologias Utilizadas
* **Frontend:** React Native com Expo e TypeScript.
* **Gerenciamento de Estado e Cache:** TanStack Query v5 (React Query).
* **Navegação:** React Navigation (Stack e Native Stack).
* **Backend de Testes:** Node.js com Express e JWT.
* **Ícones:** Ionicons (@expo/vector-icons).

## 🚀 Como Executar o Projeto

### 1. Servidor (API Mock)
O servidor simula um banco de dados em memória e gerencia a autenticação.
1. Navegue até a pasta do servidor (ex: `/api`).
2. Instale as dependências: `npm install`.
3. Inicie o servidor: `node server.js`.
*O servidor rodará em `http://localhost:3000`.*

### 2. Aplicativo Mobile
1. Na raiz do projeto, instale as dependências: `npm install`.
2. Inicie o Expo: `npx expo start -c`.
3. Utilize um emulador Android/iOS ou o app Expo Go no seu dispositivo físico.

## 🔐 Sistema de Autenticação e CRUD
A aplicação implementa um fluxo completo de autenticação e gerenciamento de dados:
* **Create:** Cadastro de usuários e ajudantes com validações e máscaras de entrada (celular e data).
* **Read:** Carregamento automático de dados do perfil e listagem de chats/artigos via TanStack Query.
* **Update:** Alteração cadastral completa permitindo que o usuário atualize suas informações na API.
* **Delete:** Exclusão segura de conta, exigindo confirmação de senha para deletar o registro no servidor.

## 📈 Roadmap (Próximas Implementações)
O projeto já conta com infraestrutura preparada para as seguintes funcionalidades da Sprint 4:
1. **Tema de Alto Contraste:** Context API (ThemeProvider) já estruturado para acessibilidade global.
2. **Segurança Avançada:** Implementação de Verificação em Duas Etapas (2FA).
3. **Acesso Rápido:** Integração com Biometria nativa.

## 🎥 Vídeo de Apresentação
[Link do Vídeo no YouTube aqui]