import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Header />
        <Movies />
        <Footer />
      </AppProvider>
    );
  }
}

export default App;
