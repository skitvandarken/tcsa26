# Firebase Backend Auth (Node.js + Express)

Este projeto implementa um sistema de autenticação seguro no backend utilizando o Firebase Admin SDK para validar tokens JWT (ID Tokens) enviados pelo frontend.

## 🚀 Requisitos

- **Node.js**: Versão 18 ou superior.
- **Firebase**: Projeto configurado no Firebase Console.

## ⚙️ Configuração do Firebase Admin

> [!CAUTION]
> **SEGURANÇA CRÍTICA**: Nunca coloque o ficheiro `serviceAccountKey.json` em repositórios públicos (GitHub, GitLab, etc). Este ficheiro contém chaves privadas que dão acesso total ao seu projeto Firebase.

1. Aceda ao [Firebase Console](https://console.firebase.google.com/).
2. Vá a **Configurações do Projeto** > **Contas de Serviço**.
3. Clique no botão **Gerar nova chave privada**.
4. Guarde o ficheiro JSON descarregado como **`serviceAccountKey.json`** na raiz da pasta `/backend`.
5. Certifique-se de que este ficheiro está listado no seu `.gitignore`.

## 🛠️ Instalação e Execução

1. **Instalar dependências**:
   ```bash
   cd backend
   npm install
   ```

2. **Executar em Produção**:
   ```bash
   npm start
   ```

3. **Executar em Desenvolvimento (com auto-reload)**:
   ```bash
   npm run dev
   ```

## 📡 Endpoints da API

A API corre por defeito em `http://localhost:3000`.

| Método | Endpoint | Acesso | Descrição |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | **Público** | Verifica se o servidor está online. |
| `GET` | `/api/profile` | **Protegido** | Retorna os dados do utilizador (uid, email) extraídos do token. |

### Como usar o endpoint protegido:
Para aceder a rotas protegidas, deve enviar o Firebase ID Token no header da requisição:
- **Header**: `Authorization`
- **Valor**: `Bearer <SEU_FIREBASE_ID_TOKEN>`

## 📁 Estrutura de Ficheiros

- `src/app.js`: Configuração global do Express e carregamento de rotas.
- `src/config/firebaseAdmin.js`: Inicialização segura do Firebase SDK.
- `src/middleware/authMiddleware.js`: Lógica de validação de tokens e tratamento de erros (401/403).
- `src/routes/api.js`: Definição dos caminhos da API.
