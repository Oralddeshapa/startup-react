import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Router';
import { useEffect } from 'react';

import IdeaList from './Components/IdeaList/IdeaList'
import Header from './Components/Header/Header'

function App() {

  let state = {
    isAdmin: false,
    isAuthorised: false,
    isCretor: false,
  }

  return (

    <div className="App">
      <Header/>
      <Routers/>
    </div>
  );
}

export default App;
