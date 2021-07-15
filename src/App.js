import logo from './logo.svg';
import './App.css';

import IdeaList from './Components/IdeaList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IdeaList />
      </header>
    </div>
  );
}

export default App;
