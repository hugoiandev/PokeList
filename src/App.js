import './App.css';
import React from 'react'
import { GlobalStorage } from './Components/GlobalContext';
import Header from './Components/Header'
import Pokemon from './Components/Pokemon';

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
