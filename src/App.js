import './App.css';
import Routers from './Routers/Router';
import React from 'react';

import Header from './Components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routers/>
    </div>
  );
}

export default App;
