import React, { Component } from 'react'
import Jukebox from './components/jukebox.js'
import Header from './components,header.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      songList: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Jukebox/>
      </div>
    );
  }
}

export default App;
