import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

//TODO: fix unnecessary requests at home page for hero image and movies (fetch data every hour)
//TODO: save each move to state which have been searched to prevent multiply requests for one same movie
//TODO: maybe split AppContext file

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/details/:id" component={MovieDetails} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
