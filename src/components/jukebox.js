import Catalog from './catalog'

const Jukebox = (props) => {
    return (
        <div className='jukebox'>
            <Catalog songList={props.songList}
                    deleteSong={props.deleteSong}
                    updateSongFn={props.updateSongFn} 
                    />
        </div>
    )
}

export default Jukebox 