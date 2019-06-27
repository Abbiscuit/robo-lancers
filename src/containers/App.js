import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RoboCardList from '../components/RoboCardList';
import Loading from '../components/Loading';

import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  state = {
    robots: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }))
      .catch(err => console.error(err));
  }

  render() {
    const { onSearchChange, searchField } = this.props;
    const { robots } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Navbar />
        <SearchBar onSearchChange={onSearchChange} />
        {!this.state.robots.length ? (
          <Loading />
        ) : (
          <RoboCardList robots={filterRobots} />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
