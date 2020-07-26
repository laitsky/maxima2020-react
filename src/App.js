import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MxmNavbar } from './components';
import { GlobalStyles } from './globalStyles';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router>
      <MxmNavbar />
      <GlobalStyles />
      <AppRouter />
    </Router>
  );
}

export default App;
