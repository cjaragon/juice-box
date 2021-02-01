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

  addSong = (e, val) => {
    e.preventDefault()
    axios.post('/api/songs', val )
    .then(res =>{this.setState({ songList: res.data })})
  }

  
  render() {
    return (
      <div className="App">
        <Header addSong={this.addSong} />
        <Jukebox songList={this.state.songList} />
      </div>
    );
  }
}

export default App;
