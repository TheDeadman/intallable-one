import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function getLink() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3000"
  }
  return "https://test-installable-two.herokuapp.com";
}

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
          href={`${getLink()}${hashTarget ? "#" + hashTarget : ''}`}
          target="app-two"
        >
          GO TO APP 2
        </a>
        <a
          className="App-link"
          href={`${getLink()}/${hashTarget ? "#" + hashTarget : ''}`}
          target="app-two"
        >
          GO TO APP 2 with /
        </a>
        <a href={`intent://test-installable-two.herokuapp.com${hashTarget ? "#" + hashTarget : ''};scheme=https;package=org.chromium.webapk.ac3efa232bdbc71ef_v2;end`}>test intent</a>
        <a href={`intent://test-installable-two.herokuapp.com${hashTarget ? "#" + hashTarget : ''};scheme=https;action=android.intent.action.VIEW;end;`}>test intent 2</a>
        <a href={`intent://test-installable-two.herokuapp.com${hashTarget ? "#" + hashTarget : ''}#Intent;scheme=https;package=org.chromium.webapk.ac3efa232bdbc71ef_v2;end`}>test intent</a>
        <a href={`intent://test-installable-two.herokuapp.com${hashTarget ? "#" + hashTarget : ''}#Intent;scheme=https;action=android.intent.action.VIEW;end;`}>test intent 2</a>
      </header>
    </div>
  );
}

export default App;
