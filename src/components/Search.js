import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const api = "https://api.themoviedb.org/3/search/movie?api_key=";

class Search extends Component {
  state = {
    searchResults: [],
    searchQuery: ""
  };

  handleChange = async e => {
    const searchQuery = e.target.value;

    // Set loading to true, while we are fetching data from server
    this.setState({ searchQuery, loading: true });

    // If searchQuery isn't present, don't send request to server
    if (!searchQuery) {
      return false;
    }

    const res = await axios.get(
      `${api}${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );

    const searchResults = await res.data.results;

    this.setState({
      searchResults,
      loading: false
    });
  };

  handleRedirect(movieId) {
    // Clear input value and close autocomplete container,
    // by clearing searchQuery state
    this.setState({
      searchQuery: "",
      searchResults: []
    });

    // Redirect to movie page
    this.props.history.push(`/movie/details/${movieId}`);
  }

  renderSearchResults() {
    const { searchResults, searchQuery, loading } = this.state;

    if (!searchQuery) {
      return "";
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map(result => (
            <div
              key={result.id}
              className="Search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              <div>{result.title}</div>
              <div>{result.release_date}</div>
            </div>
          ))}
        </div>
      );
    }

    // Send no result, only if loading is set to false
    // To avoid showing no result, when actually there are ones
    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">No results found.</div>
        </div>
      );
    }
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="search-box">
        <div className="row">
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={this.handleChange}
            value={searchQuery}
          />
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Search);
