import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { MxmNavbar } from './components';
import { GlobalStyles } from './globalStyles';
import AppRouter from './AppRouter';

function App() {
  return (
    <AnimatePresence>
      <MxmNavbar />
      <GlobalStyles />
      <AppRouter />
    </AnimatePresence>
  );
}

export default App;
