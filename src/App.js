import React from 'react';
import './App.css';
import { MxmNavbar } from './components';
import { GlobalStyles } from './globalStyles';
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <MxmNavbar />
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;
