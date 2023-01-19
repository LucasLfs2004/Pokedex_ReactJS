import './App.css';
import React from 'react';
import Header from '../components/template/Header';
import Pokedex from '../components/content/Pokedex';
import { BrowserRouter } from 'react-router-dom';
//import Router from '../components/routes/Content';
import Content from '../components/routes/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
