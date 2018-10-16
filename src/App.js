import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";

//TODO: fix unnecessary requests at home page for hero image and movies (fetch data every hour)
//TODO: save each move to state which have been searched to prevent multiply requests for one same movie
//TODO: maybe split AppContext file

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Header />
        <Hero />
        <Search />
        <Movies />
        <Footer />
      </AppProvider>
    );
  }
}

export default App;
