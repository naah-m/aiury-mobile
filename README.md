# 💮 Aiury

O **Aiury** é um aplicativo mobile focado em impacto social, desenvolvido para conectar usuários que buscam suporte e orientação a ajudantes capacitados. O projeto prioriza uma experiência segura, fluida e acessível para todos os perfis de usuários.

---

## 📌 Visão Geral da Sprint 3
Esta etapa representa a consolidação técnica do projeto. Abandonamos o uso de estados locais e navegação condicional para implementar uma arquitetura profissional baseada em **TanStack Query** e integração real com uma API mockada em Node.js.

### Principais Entregas:
- **Fluxo de CRUD Completo:** Cadastro, leitura de dados, atualização de perfil e exclusão de conta totalmente integrados ao backend.
- **Gerenciamento de Cache:** Uso do TanStack Query para evitar requisições desnecessárias e gerenciar estados de carregamento e erro.
- **Segurança de Interface:** Validação de senha para operações críticas (exclusão de conta) via Modais customizados.
- **Máscaras e UX:** Implementação de máscaras de entrada para Celular e Data de Nascimento, garantindo padronização de dados.

---

## 🛠 Tecnologias Utilizadas
- **Frontend:** React Native (Expo) com TypeScript.
- **Backend Mock:** Node.js + Express + JWT (JSON Web Token).
- **Dados:** TanStack Query v5 (React Query).
- **Navegação:** React Navigation (Native Stack).
- **Estilização:** StyleSheet com temas centralizados.

---

## 🚀 Como Executar

### 1. Servidor (API)
1. Acesse o diretório da API.
2. Execute `npm install` para instalar as dependências.
3. Inicie o servidor com `node server.js`.
*A API ficará disponível em `http://localhost:3000`.*

### 2. Aplicativo Mobile
1. Na raiz do projeto, execute `npm install`.
2. Inicie o ambiente Expo com `npx expo start`.
3. Escaneie o QR Code com o app Expo Go ou utilize um emulador.

---

## 🔮 Roadmap: Próximas Funcionalidades

### 🌓 Tema de Alto Contraste (Acessibilidade)
Já possuímos a estrutura de **Context API (ThemeProvider)** implementada. Na próxima fase, o app permitirá a alteração dinâmica para um tema de alto contraste, atendendo a critérios de acessibilidade visual e garantindo que o app seja utilizável em qualquer condição de luminosidade.

### 🛡️ Segurança Avançada (2FA)
Implementaremos a **Verificação em Duas Etapas**. Além da senha tradicional, o usuário deverá confirmar um PIN ou código enviado via SMS/E-mail para validar logins em novos dispositivos.

### ⚡ Acesso Rápido com Biometria
Integração com as APIs nativas de cada sistema (FaceID/TouchID no iOS e Biometria no Android) para que o usuário possa acessar sua conta de forma instantânea e segura, sem digitar a senha a cada sessão.

### ☕ Integração com API Java
O próximo grande salto será a substituição do servidor mock por uma **API Java robusta**. Esta integração permitirá:
- Persistência real em banco de dados relacional.
- Gerenciamento avançado de sessões.
- Logs de auditoria e maior performance no processamento de dados.

---

## 🗺️ Estratégia de Integridade de Dados: Estados e Cidades

Para evitar inconsistências no banco de dados (como nomes de cidades escritos de formas diferentes), implementaremos uma **listagem seletiva de Estados e Cidades**.

**Por que isso é importante?**
- **Padronização:** Garante que o banco de dados não receba "São Paulo", "Sao Paulo" e "S. Paulo" como entradas diferentes.
- **Saúde do Banco:** Evita o crescimento desnecessário de registros duplicados e facilita a geração de relatórios geográficos.
- **UX:** O usuário seleciona sua localização em uma lista filtrada, reduzindo erros de digitação e tornando o cadastro mais rápido.

---

## 📁 Organização de Pastas
- `/src/components`: Componentes reutilizáveis (botões, inputs, modais).
- `/src/hooks`: Lógica de API isolada com TanStack Query (useMutation, useQuery).
- `/src/services`: Configurações de chamada Axios.
- `/src/styles`: Temas de cores e estilos globais.
- `/src/navigation`: Definição de rotas e tipos.
- `/src/utils`: Funções auxiliares (máscaras e validadores).

---

## 🎥 Vídeo de Apresentação
[Link do Vídeo no YouTube aqui]

## 🎥 Integrantes do Projeto
- Nathália Mantovani de Falco RM 99904 
- João Victor Madella RM 561007
- Renato de Angelo RM560585
