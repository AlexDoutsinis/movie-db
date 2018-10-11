import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Movies />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
