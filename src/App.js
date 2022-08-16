import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App ONE
        </p>
        <a
          className="App-link"
          href="https://test-installable-two.herokuapp.com/"
          target="_blank"
        >
          GO TO APP 2
        </a>
      </header>
    </div>
  );
}

export default App;
