import React, { Component } from 'react'
import Edit from './edit.js'

class Song extends Component {
    constructor() {
        super()
        this.state = {
            editing: false
        }
    }

    showEdit = () => {
        if (this.state.editing !== true) {
            this.setState({ editing: true })
        }else {
            this.setState({ editing: false })
        }
    }

    render() {
        const { title, artist, genre } = this.props
        return (
            <div className='song'>
                <div className='song-info'>
                    <p className='song-text'> Title: {title} </p>
                    <p className='song-text'> Artist: {artist} </p>
                    {
                        this.state.editing
                            ?
                            <Edit />
                            :
                            <p className='song-text'> Genre: {genre} </p>
                    }
                </div>
                <div className='button-menu'>
                    <button className='song-buttons'
                        onClick={this.showEdit}
                    > E </button>
                    <button className='song-buttons'
                        onClick={this.props.deleteSong}
                    > X </button>
                </div>
            </div>
        )
    }
}

export default Song