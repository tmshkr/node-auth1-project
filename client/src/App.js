import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <main className="App">
        <header className="top">
          <nav>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        <Switch>
          <Redirect to="/login" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
