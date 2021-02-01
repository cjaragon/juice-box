const Song = (props) => {
    const {title, artist, genre} = props
    return (
        <div className='song'>
            <div className='song-info'>
                <p className='song-text'> Title: {title} </p>
                <p className='song-text'> Artist: {artist} </p>
                <p className='song-text'> Genre: {genre} </p>
            </div>
            <div className='button-menu'>
                <button className='song-buttons'
                > E </button>
                <button className='song-buttons'
                > X </button>
            </div>
        </div>
    )
}

export default Song