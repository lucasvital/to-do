import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos globais, se necessário
import App from './App'; // Importando o App principal

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Certifique-se de que a div com id 'root' existe no seu index.html
);
