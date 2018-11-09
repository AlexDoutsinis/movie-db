import React, { Fragment } from "react";
import "./App.css";
import "swiper/dist/css/swiper.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { AppProvider } from "../containers/AppContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "../containers/MovieDetails";

//TODO: add local storage - done
//TODO: add spinner to home page - done
//TODO: add animations
//TODO: add responsiveness - done
//TODO: add a NotFound component
//TODO: code refactor - done

const App = () => (
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

export default App;
