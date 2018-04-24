import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterTable from './FilterTable';
import Content from './Content.js';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FilterTable />
       <Content />
      </div>
    );
  }
}

export default App;
