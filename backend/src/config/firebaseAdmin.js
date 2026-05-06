const admin = require('firebase-admin');
const path = require('path');

// Caminho para o ficheiro de chave de serviço do Firebase
// O utilizador deve colocar o serviceAccountKey.json na raiz da pasta /backend
const serviceAccountPath = path.join(__dirname, '../../serviceAccountKey.json');

try {
  const serviceAccount = require(serviceAccountPath);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  console.log('Firebase Admin initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase Admin:', error.message);
  console.error('Certifique-se de que o ficheiro serviceAccountKey.json está na raiz da pasta /backend');
}

module.exports = admin;
