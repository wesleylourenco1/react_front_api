# React Frontend para API Laravel

Frontend React + Vite para consumir APIs Laravel, com autenticação JWT, gerenciamento de rotas via Context API e Tailwind CSS. Layout moderno de login, proteção de rotas e base pronta para novos projetos.

## Badges
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)

## Tecnologias
- React 18 + Vite
- Tailwind CSS
- React Context API
- React Router DOM
- JWT (localStorage)

## Funcionalidades
- Login e logout com JWT
- Proteção de rotas
- Layout responsivo
- Configuração de rotas via `.env`

## Estrutura
src/
├─ context/      # AuthContext
├─ pages/        # Login, Home, etc.
├─ routes/       # apiRoutes.js
├─ App.jsx
.env.example      # Variáveis de ambiente

## Variáveis de ambiente
Crie `.env` baseado em `.env.example`:

VITE_API_URL=http://localhost:8000/api  
VITE_LOGIN_ROUTE=/user/login  
VITE_LOGOUT_ROUTE=/user/logout  
VITE_REGISTER_ROUTE=/user/register  
VITE_PROFILE_ROUTE=/user/profile  


## Executar localmente
1. Instale as dependências:
npm install

2. Inicie o servidor de desenvolvimento:
npm run dev

3. Abra no navegador:
http://localhost:5173

## Observações
- Base pronta para expandir funcionalidades e páginas  
- Fácil adaptação para novos projetos  
- Mantém boas práticas de autenticação e rotas protegidas
