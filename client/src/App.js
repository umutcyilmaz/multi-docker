import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Fib />
        </div>
      </div>
    </Router>
  );
}

export default App;
