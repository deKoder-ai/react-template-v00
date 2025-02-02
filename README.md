# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# react-template-v00

Setting up a React project using Vite
https://www.theodinproject.com/lessons/node-path-react-new-setting-up-a-react-environment
- Set up new repository on github
- Clone to local
- Check using the latest LTS version of node
  terminal: node -v
  Compare with: https://nodejs.org/en
- Create new vite app
  terminal: cd react-template-v00
  terminal: npm create vite@latest . -- --template react
  terminal: npm install
  terminal: npm run dev
  view page at: localhost:5173

Install react developer tools browser plugin:
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

./src/main.jsx serves as entry point of the application

Setting up editor
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
terminal: npx eslint --init
