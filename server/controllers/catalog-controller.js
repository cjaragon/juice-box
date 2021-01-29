let songs = [
    {
        id: 0,
        song: "Christmas in L.A.",
        Artist: "Vulfpeck",
        genre: "Funk"
    }
]
let id = 1

module.exports = {
    sendSongs: (req, res) => {
        res.status(200).send(songs)
    }
}