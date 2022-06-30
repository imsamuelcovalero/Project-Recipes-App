import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './routers/Content';
import AppProvider from './context/AppProvider';
import GlobalStyle from './styles/Globals';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Content />
    </AppProvider>
  );
}

export default App;
