import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            
            title: '',
            artist: '',
            genre: ''
            
        }
        
    }

    handleTitle = (val) => {
        this.setState({ title: val })
    }

    handleArtist = (val) => {
        this.setState({ artist: val })
    }

    handleGenre = (val) => {
        this.setState({ genre: val })
    }

    handleAdd = (e, val) => {
        this.props.addSong(e, val)
        this.setState({title: '', artist: '', genre: ''})
    }
    
    render() {
        return (
            <form className='form'>
                <input
                className='input'
                placeholder='Title'
                onChange={e => this.handleTitle(e.target.value)}
                value={this.state.title}/>
                <input
                className='input'
                placeholder='Artist'
                onChange={e => this.handleArtist(e.target.value)}
                value={this.state.artist}/>
                <input
                className='input'
                placeholder='Genre'
                onChange={e => this.handleGenre(e.target.value)}
                value={this.state.genre}/>
                <button
                className='form-button'
                onClick={(e) => {this.handleAdd(e, this.state)}}
                > Add Song </button>
            </form>
        )
    }
}

export default Form