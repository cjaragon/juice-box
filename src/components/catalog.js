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
            <section className='catalog'>
                <h1> CATALOG </h1>
                <br/>
                <div className='list'>
                    <Song/>
                </div>
            </section>
        )
    }
}

export default Catalog