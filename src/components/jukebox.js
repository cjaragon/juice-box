import Catalog from './catalog'

const Jukebox = (props) => {
    return (
        <div className='jukebox'>
            <Catalog songList={props.songList}/>
        </div>
    )
}

export default Jukebox 