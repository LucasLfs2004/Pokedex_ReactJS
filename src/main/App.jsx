import React from 'react';
import Header from '../components/template/Header';
import { BrowserRouter } from 'react-router-dom';
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
