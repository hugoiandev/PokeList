import './App.css';
import React from 'react'
import { GlobalStorage } from './Components/GlobalContext';
import Header from './Components/Header'
import Pokemon from './Components/Pokemon';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes />
        </GlobalStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
