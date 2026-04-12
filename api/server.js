const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const termosMockados = require('./data/termos.json');
const artigosMockados = require('./data/artigos.json');
let chatsMockados = require('./data/chats.json');
let mensagensMockadas = require('./data/mensagens.json');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = 'aiury-mobile-secret-key';

let usuariosCadastrados = [];

// ---------------------------------------------------------
// AUTH & USUÁRIOS (CRUD COMPLETO)
// ---------------------------------------------------------
app.post('/api/login', (req, res) => {
    const { celular, senha } = req.body;
    
    const usuarioencontrado = usuariosCadastrados.find(u => u.celular === celular && u.senha === senha);

    if (usuarioencontrado) {
        const token = jwt.sign({ id: usuarioencontrado.id, role: usuarioencontrado.role }, SECRET_KEY, { expiresIn: '2h' });
        
        return res.json({ 
            token: token, 
            user: usuarioencontrado 
        });
    }
    
    return res.status(401).json({ message: 'Credenciais inválidas. Verifique seu celular e senha.' });
});

app.post('/api/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuariosCadastrados.length + 1,
        ...req.body, 
        role: 'user'
    };
    usuariosCadastrados.push(novoUsuario);
    console.log('Novo usuário cadastrado:', novoUsuario);
    res.status(201).json(novoUsuario);
});

app.post('/api/ajudantes', (req, res) => {
    const novoAjudante = {
        id: usuariosCadastrados.length + 1,
        ...req.body, 
        role: 'helper'
    };
    usuariosCadastrados.push(novoAjudante);
    console.log('Novo ajudante cadastrado:', novoAjudante);
    res.status(201).json(novoAjudante);
});

app.put('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const index = usuariosCadastrados.findIndex(u => u.id == id);

    if (index !== -1) {
        usuariosCadastrados[index] = { ...usuariosCadastrados[index], ...req.body };
        console.log('Usuário atualizado:', usuariosCadastrados[index]);
        return res.json(usuariosCadastrados[index]);
    }

    return res.status(404).json({ message: 'Usuário não encontrado' });
});

app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { senha } = req.body;
    
    const index = usuariosCadastrados.findIndex(u => u.id == id && u.senha === senha);
    
    if (index !== -1) {
        usuariosCadastrados.splice(index, 1);
        console.log(`Conta do usuário ${id} excluída com sucesso.`);
        return res.json({ message: 'Conta excluída' });
    }
    
    return res.status(401).json({ message: 'Senha incorreta ou usuário não encontrado' });
});

// ---------------------------------------------------------
// CHATS & MENSAGENS
// ---------------------------------------------------------
app.post('/api/chats', (req, res) => {
    setTimeout(() => {
        const novoChat = {
            id_chat: 'sala-' + Date.now(),
            contactName: 'Ajudante Ana',
            status: 'ativo'
        };
        chatsMockados.push(novoChat);

        res.status(201).json({ 
            id_chat: novoChat.id_chat, 
            participants: [{ id: 2, nome: novoChat.contactName }] 
        });
    }, 1500); 
});

app.get('/api/usuarios/:id/chats', (req, res) => {
    res.json(chatsMockados);
});

app.get('/api/chats/:id/mensagens', (req, res) => {
    res.json(mensagensMockadas);
});

app.post('/api/chats/:id/mensagens', (req, res) => {
    const { conteudo } = req.body;
    
    const novaMensagemUsuario = {
        id_mensagem: Date.now(),
        text: conteudo,
        origem: 'U'
    };
    mensagensMockadas.items.push(novaMensagemUsuario);

    setTimeout(() => {
        const novaMensagemAjudante = {
            id_mensagem: Date.now() + 1,
            text: 'Eu entendo. Quer me contar um pouco mais sobre isso?',
            origem: 'A'
        };
        mensagensMockadas.items.push(novaMensagemAjudante);
        console.log('Ajudante respondeu com uma nova mensagem.');
    }, 3000);

    res.status(201).json(novaMensagemUsuario);
});

app.put('/api/chats/:id/encerrar', (req, res) => {
    const chatId = req.params.id;
    const chat = chatsMockados.find(c => c.id_chat === chatId);
    
    if (chat) {
        chat.status = 'encerrado';
        return res.json({ message: 'Chat encerrado com sucesso' });
    }
    return res.status(404).json({ message: 'Chat não encontrado' });
});

// ---------------------------------------------------------
// EXTRAS (Termos, Artigos e Reports)
// ---------------------------------------------------------
app.get('/api/termos', (req, res) => res.json(termosMockados));

app.get('/api/artigos', (req, res) => res.json(artigosMockados));

app.post('/api/reports', (req, res) => res.status(201).json({ message: 'Report recebido com sucesso' }));

// INICIA O SERVIDOR
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Mock API rodando liso na porta http://localhost:${PORT}`);
});