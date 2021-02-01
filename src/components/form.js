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
    
    render() {
        return (
            <form className='form'>
                <input
                className='input'
                placeholder='Title'
                onChange={e => this.handleTitle(e.target.value)}/>
                <input
                className='input'
                placeholder='Artist'
                onChange={e => this.handleArtist(e.target.value)}/>
                <input
                className='input'
                placeholder='Genre'
                onChange={e => this.handleGenre(e.target.value)}/>
                <button
                className='form-button'
                onClick={(e) => {
                    this.props.addSong(e, this.state)}}
                > Add Song </button>
            </form>
        )
    }
}

export default Form