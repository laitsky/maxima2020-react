import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MxmNavbar from './components/_shared/MxmNavbar';
import { GlobalStyles } from './globalStyles';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <MxmNavbar /> */}
      <AppRouter />
    </Router>
  );
}

export default App;
