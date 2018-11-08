import React, { Component, Fragment } from "react";
import "./App.css";
import "swiper/dist/css/swiper.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

//TODO: maybe split AppContext file
//TODO: add local storage - done
//TODO: add spinner to home page - done
//TODO: add animations
//TODO: add responsiveness - done
//TODO: code refactor

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
