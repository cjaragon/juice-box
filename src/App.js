import React, { Component } from 'react'
import Jukebox from './components/jukebox.js'
import Header from './components/header.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      songList: []
    }
  }

  componentDidMount() {
    axios.get('/api/songs')
    .then (res => {this.setState({ songList: res.data })})
    .catch (err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Jukebox songList={this.state.songList} />
      </div>
    );
  }
}

export default App;
