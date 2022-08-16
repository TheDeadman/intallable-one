import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hashTarget, setHashTarget] = useState('')
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App ONE - {location.hash}
        </p>
        <input type="text" value={hashTarget} onChange={(e) => setHashTarget(e.target.value)} />
        <a
          className="App-link"
          href={`https://test-installable-two.herokuapp.com/${hashTarget ? "#" + hashTarget : ''}`}
          target="_blank"
        >
          GO TO APP 2
        </a>
      </header>
    </div>
  );
}

export default App;
