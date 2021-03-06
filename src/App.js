import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flea Market</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
