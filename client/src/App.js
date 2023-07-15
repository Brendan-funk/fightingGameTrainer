import React from "react";
import './App.css';
import {Login} from "./login";
import {register} from "./register";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Login />
      <header className="App-header">
        <nav>
          <p className="title">Fighting Game Trainer</p>
          <div className="login">
            <button onclick="showLogIn">Log In</button>
            <p>Sign Up</p>
          </div>
        </nav>
        <p>
          {!data ? "Loading..." : data}
        </p>
        <p>hello</p>
      </header>
    </div>
  );

}

export default App;
