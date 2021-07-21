import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Router';

import IdeaList from './Components/IdeaList/IdeaList'
import Header from './Components/Header/Header'

function App() {
  return (

    <div className="App">
      <body>
        <Header/>
        <Routers/>

      </body>
    </div>
  );
}

export default App;
