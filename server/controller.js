const walkWithMeInHell = ('C:\Users\metal\Desktop\vscodes\capstone\songs\01 Walk With Me In Hell.mp3')


let songs = [walkWithMeInHell, anothersong,  ]


// this is the one to get the song
module.exports = {
    getSong: (req, res) => {
    res(songs)
    }
}
