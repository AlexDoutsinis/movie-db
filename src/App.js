import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
