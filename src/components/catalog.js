
import Song from './song.js'

const Catalog = (props) => {

    const { songList } = props
    let list = songList.map(song => {
        return <Song key={song.id} title={song.title} artist={song.artist} genre={song.genre}
            deleteSong={() => props.deleteSong(song.id)} />
    })
    return (
        <div className='catalog'>
            <h1> CATALOG </h1>
            <br />
            <div className='list'>
                {list}
            </div>
        </div>
    )
}

export default Catalog