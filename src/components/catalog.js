
import Song from './song.js'

const Catalog = (props) => {

    const { songList } = props
    let list = songList.map(song => {
        return <Song key={song.id} title={song.title} artist={song.artist} genre={song.genre}
            deleteSong={() => props.deleteSong(song.id)}
            updateSongFn={props.updateSongFn}
            id={song.id} />
    })
    return (
        <div className='catalog'>
            {list}
        </div>
    )
}

export default Catalog