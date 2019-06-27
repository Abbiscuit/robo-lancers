import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RoboCardList from '../components/RoboCardList';
import Loading from '../components/Loading';

class App extends Component {
  state = {
    robots: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ robots: data }))
      .catch(err => console.error(err));
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div>
        <Navbar />
        <SearchBar onSearchChange={this.onSearchChange} />
        {!this.state.robots.length ? (
          <Loading />
        ) : (
          <RoboCardList robots={filterRobots} />
        )}
      </div>
    );
  }
}

export default App;
