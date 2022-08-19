import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hashTarget, setHashTarget] = useState('')
  const [time, setTime] = useState(Date.now())
  const location = useLocation();
  let support = false;
  if ('launchQueue' in window && 'targetURL' in window.LaunchParams.prototype) {
    // The Launch Handler API is supported.
    support = true;
  }
  useEffect(() => {
    window.name = "app-one"
    // window.onbeforeunload = (e) => {
    //   alert("Test")
    // }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App ONE - {location.hash} - supported? {`${support}`}
        </p>
        <p>
          Time: {new Date(time).toString()}
        </p>
        <input type="text" value={hashTarget} onChange={(e) => setHashTarget(e.target.value)} />
        <a
          className="App-link"
          href={`https://test-installable-two.herokuapp.com${hashTarget ? "#" + hashTarget : ''}`}
          target="app-two"
        >
          GO TO APP 2
        </a>
        <a
          className="App-link"
          href={`https://test-installable-two.herokuapp.com/${hashTarget ? "#" + hashTarget : ''}`}
          target="app-two"
        >
          GO TO APP 2 with /
        </a>
      </header>
    </div>
  );
}

export default App;
