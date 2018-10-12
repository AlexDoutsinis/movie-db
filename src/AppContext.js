import React, { Component, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

export class AppProvider extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await res.data.results;

    this.setState({ movies });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
