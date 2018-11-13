import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Login from './components/screen/Login/Login';
import Routes from './Routes/Routes';

class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}

export default App;

{/* <div className="App">
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
</div> */}
