import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar row">
        <h3 className="col-md-2"><span className="title">Me</span>Tube</h3>

        <input
          value={this.state.term}
          onChange={event => this.handleInputChange(event.target.value) }
          className="form-control"
          placeholder="Search youtube videos here..."
        />
      </div>
    );
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
