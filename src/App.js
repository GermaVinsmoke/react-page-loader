import moment from 'moment';
import VerticalBar from './VerticalBar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* These modules are just for showing the increase in page load */}
        <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
        <VerticalBar />
      </header>
    </div>
  );
}

export default App;
