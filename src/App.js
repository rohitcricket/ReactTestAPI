import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Book from "./components/Book.js";
import Post from "./components/TestAPI.js";
import Read from "./components/ReadAPI.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Book name="John Galt" />
        <Post />
        <Read />
      </div>
    );
  }
}

export default App;
