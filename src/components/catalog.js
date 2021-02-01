import React, {Component} from 'react'
import Song from './song.js'

class Catalog extends Component {
   

    render() {
        const {songList} = this.props
        let list = songList.map(song => {
            return <Song key={song.id} title={song.title} artist={song.artist} genre={song.genre} />
        })
        return (
            <div className='catalog'>
                <h1> CATALOG </h1>
                <br/>
                <div className='list'>
                   {list}
                </div>
            </div>
        )
    }
}

export default Catalog