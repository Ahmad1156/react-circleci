import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello all!nice to meet you!Hope you are doing well!Todat we will talk
          about CI/CD.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ahmad Shakik
        </a>
      </header>
    </div>
  );
}

export default App;
