import './App.css';
import React from 'react'
import { GlobalStorage } from './Components/GlobalContext';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes.js'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <GlobalStorage>
          <Routes />
        </GlobalStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
