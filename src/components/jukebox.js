import Catalog from './catalog'

const Jukebox = (props) => {
    return (
        <div className='jukebox'>
            <Catalog songList={props.songList}
            deleteSong={props.deleteSong}/>
        </div>
    )
}

export default Jukebox 