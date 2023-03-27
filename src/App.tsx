import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React from circle CI.(Ahmad shakik)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI/CD integration example!! created by Ahmad Shakik!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
