const admin = require('../config/firebaseAdmin');

/**
 * Middleware para validar o Firebase ID Token
 * Espera o header: Authorization: Bearer <TOKEN>
 */
const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 1. Verificar se o header Authorization está presente e começa com 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Token ausente ou formato inválido. Use Bearer <token>.'
    });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    // 2. Validar o token com o Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // 3. Extrair informações do utilizador e anexar ao objeto request
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name || '',
      picture: decodedToken.picture || ''
    };

    next();
  } catch (error) {
    console.error('Erro na validação do token:', error.code);

    // 4. Tratamento de erros específicos do Firebase
    if (error.code === 'auth/id-token-expired') {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Token expirado. Por favor, faça login novamente.'
      });
    }

    if (error.code === 'auth/argument-error' || error.code === 'auth/invalid-id-token') {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Token inválido.'
      });
    }

    // Erro genérico de proibição se algo mais falhar na validação
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Acesso negado ou erro na verificação do token.',
      details: error.message
    });
  }
};

module.exports = authenticate;
