import logo from './logo.svg';
/*import './App.css';*/
import React from 'react'
import {BrowserRouter, Router, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
function App() {
  return (
      /*<div className="App">
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
      </header>
    </div>*/
      <BrowserRouter>
      <div className="container pt-4">
      <Switch>
        <Router path={'/'} exact component={Home} />
          <Router path={'/'} exact component={Home} />
      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
