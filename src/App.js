import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { GlobalStyles } from './globalStyles';
import AppRouter from './AppRouter';

function App() {
  return (
    <AnimatePresence>
      <GlobalStyles />
      <AppRouter />
    </AnimatePresence>
  );
}

export default App;
