import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Arquivo gerado a partir do comando create react-app que renderiza a aplicaçao e "joga" para nossa div #root dentro do index.html. Em casos de trabalharmos com multiplas paginas, aqui estariamos direcionando dentro do render, para um arquivo de rotas, onde trabalhariamos com o react-router-dom.