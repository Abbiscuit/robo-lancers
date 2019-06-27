import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RoboCard from './components/RoboCard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        <RoboCard />
      </div>
    );
  }
}

export default App;
