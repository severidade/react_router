import React from 'react';
import './Style.css';

import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {

  render() {

    return (
      <>
        <h1>Paises do mundo</h1>
        <BrowserRouter>
          <Routes path="/" component={ Home } />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
