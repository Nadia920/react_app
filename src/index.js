import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();