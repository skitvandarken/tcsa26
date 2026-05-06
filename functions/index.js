const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

/**
 * Health Check - Função pública para verificar se o sistema está online.
 */
exports.health = onRequest((req, res) => {
  cors(req, res, () => {
    logger.info("Health check executado", { structuredData: true });
    res.status(200).json({
      status: "OK",
      message: "Firebase Cloud Functions estão a funcionar corretamente.",
      timestamp: new Date().toISOString()
    });
  });
});

/**
 * Profile - Função protegida que valida o Firebase ID Token.
 */
exports.profile = onRequest(async (req, res) => {
  cors(req, res, async () => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      logger.error("Tentativa de acesso sem token válido");
      return res.status(401).json({ error: "Não autorizado: Token em falta" });
    }

    const idToken = authHeader.split("Bearer ")[1];

    try {
      // Validação do Token via Firebase Admin SDK
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;

      logger.info(`Perfil acedido pelo utilizador: ${uid}`);

      // Procurar dados adicionais no Firestore
      const userDoc = await admin.firestore().collection('users').doc(uid).get();
      const userData = userDoc.exists ? userDoc.data() : {};

      res.status(200).json({
        message: "Dados do perfil carregados com sucesso",
        user: {
          uid: uid,
          email: decodedToken.email,
          name: decodedToken.name || userData.displayName || "Utilizador Firebase",
          role: userData.role || "user",
          lastLogin: userData.lastLogin || new Date().toISOString(),
          auth_time: new Date(decodedToken.auth_time * 1000).toISOString()
        }
      });
    } catch (error) {
      logger.error("Erro ao validar ID Token:", error);
      res.status(403).json({ error: "Proibido: Token inválido ou expirado" });
    }
  });
});
