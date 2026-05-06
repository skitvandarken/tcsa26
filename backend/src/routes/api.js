const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

// --- Rota Pública ---
// Exemplo: /api/health
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Firebase Auth Backend'
  });
});

// --- Rota Protegida ---
// Exemplo: /api/profile
// O middleware 'authenticate' bloqueia o acesso se o token for inválido
router.get('/profile', authenticate, (req, res) => {
  // Se chegar aqui, o utilizador está autenticado e os dados estão em req.user
  res.status(200).json({
    message: 'Acesso autorizado ao perfil!',
    user: req.user
  });
});

module.exports = router;
