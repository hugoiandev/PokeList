import './App.css';
import React from 'react'
import { GlobalStorage } from './GlobalContext';
import Header from './Header'
import Pokemon from './Pokemon';

function App() {

  return (
    <>
      <GlobalStorage>
        <Header />
        <Pokemon />
      </GlobalStorage>
    </>
  );
}

export default App;
