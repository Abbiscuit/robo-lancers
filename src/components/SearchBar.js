import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="validate"
          placeholder="Search robots..."
          id="name"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBar;
