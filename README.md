# React Frontend para API Laravel

Frontend React + Vite para consumir APIs Laravel, com autenticação JWT, gerenciamento de rotas via Context API e Tailwind CSS. Layout moderno de login, proteção de rotas e base pronta para novos projetos.

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
├─ context/ # AuthContext
├─ pages/ # Login, Home, etc.
├─ routes/ # apiRoutes.js
├─ App.jsx
.env.example # Variáveis de ambiente

markdown
Copiar código

## Variáveis de ambiente
Crie `.env` baseado em `.env.example`:

VITE_API_URL=http://localhost:8000/api
VITE_LOGIN_ROUTE=/user/login
VITE_LOGOUT_ROUTE=/user/logout
VITE_REGISTER_ROUTE=/user/register
VITE_PROFILE_ROUTE=/user/profile

go
Copiar código

> Nunca suba o `.env` real. Use `.env.example` como referência.

## Executar localmente
```bash
npm install
npm run dev
Abra no navegador: http://localhost:5173

Observações
Base pronta para expandir funcionalidades e páginas

Fácil adaptação para novos projetos

Mantém boas práticas de autenticação e rotas protegidas

yaml
Copiar código

---

Agora, para enviar **tudo para o GitHub**:

```bash
git add .
git commit -m "Adiciona projeto React + AuthContext + README"
git push -u origin main
