/*import logo from './logo.svg';*/
/*import './App.css';*/
import React from 'react'
/*import {BrowserRouter, Routes, Route} from 'react-router-dom'*/
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Home} from './pages/Home'
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";

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
          <Navbar />
      <div className="container pt-4">
          <Alert />
      <Routes>
        <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
