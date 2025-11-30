const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(__dirname));

app.get('/api', (req, res) => {
    res.json({ 
        message: "API do Academic Planner rodando!", 
        version: "1.0.0",
        status: "online"
    });
});

app.get('/api/status', (req, res) => {
    const systemStats = {
        uptime: process.uptime(),
        serverTime: new Date().toISOString(),
        memoryUsage: process.memoryUsage()
    };
    res.json(systemStats);
});

app.get('/api/about', (req, res) => {
    res.json({
        project: "Academic Planner Univille",
        team: "Grupo 05 - Desenvolvimento Web",
        members: ["Felipe", "Matheus", "Tiago"]
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.use((req, res) => {
    res.status(404).send('Recurso não encontrado no servidor.');
});

app.listen(port, () => {
    console.log(`
    🚀 Servidor rodando em: http://localhost:${port}
    - Front-end acessível na raiz
    - API disponível em: http://localhost:${port}/api
    `);
});