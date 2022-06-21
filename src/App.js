import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './routers/Content';
import AppProvider from './context/AppProvider';

// Inicia o projeto
function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}

export default App;
