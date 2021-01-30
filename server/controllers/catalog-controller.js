let songs = [
    {
        id: 0,
        title: "Christmas in L.A.",
        artist: "Vulfpeck",
        genre: "Funk"
    },
    {
        id: 1,
        title: "Back Pocket",
        artist: "Vulfpeck",
        genre: "Funk"
    }
]
let id = 2

module.exports = {
    sendSongs: (req, res) => {
        res.status(200).send(songs)
    },
    addSong: (req, res) => {
        const {title, artist, genre} = req.body
        songs.push({id, title, artist, genre})
        id++
        res.status(200).send(songs)
    },
    editGenre: (req, res) => {
        const {genre} = req.body
        const updateId = req.params.id
        const songIndex = songs.findIndex(song => song.id === +updateId)
        let song = songs[songIndex]
        console.log(songIndex)

        songs[songIndex] = {
            id: song.id,
            title: song.title,
            artist: song.artist,
            genre: genre || song.genre
        }

        res.status(200).send(songs)
    },
    deleteSong: (req, res) => {
        const deleteId = req.params.id
        const songIndex = songs.findIndex(song => song.id === +deleteId)
        songs.splice(songIndex, 1)

        res.status(200).send(songs)
    }
}