import React, {Component} from 'react'
import Song from './song.js'

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            songList: []
        }
    }

    render() {
        return (
            <div className='catalog'>
                <h1> CATALOG </h1>
                <br/>
                <div className='list'>
                    <Song/>
                </div>
            </div>
        )
    }
}

export default Catalog