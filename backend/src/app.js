require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações Globais
app.use(cors()); // Permitir pedidos de diferentes origens (frontend)
app.use(express.json()); // Permitir parse de JSON no body

// Montagem das Rotas
app.use('/api', apiRoutes);

// Rota base para verificação simples
app.get('/', (req, res) => {
  res.send('Firebase Auth Backend is running. Use /api/health or /api/profile.');
});

// Middleware de tratamento de erros global (opcional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 Servidor a correr na porta ${PORT}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log(`========================================`);
});

module.exports = app;
