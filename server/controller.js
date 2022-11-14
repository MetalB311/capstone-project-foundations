// const walkWithMeInHell = ('C:\Users\metal\Desktop\vscodes\capstone\songs\01 Walk With Me In Hell.mp3')





// this is the one to get the song
// module.exports = {
//     getSong: (req, res) => {
//     res.document.querySelectorAll('h2')
//     }
// }

module.exports = {
    getSong: (req, res) => {
        let songs = document.querySelectorAll('h2')
        res.status(200).send(songs)
    }
}


































// export default class AudioPlayer {
//     constructor(selector = '.audioPlayer', audio = []) {
//         this.playerElem = document.querySelector(selector);
//         this.audio = audio;
//         this.currentAudio = null;
//         this.createPlayerElements();
//     }

//         createPlayerElements() {
//             this.audioElem = document.createElement('audio');
//             const playListElem = document.createElement('div');
//             playListElem.classList.add('playlist');

//             this.playerElem.appendChild(this.audioElem);
//             this.playerElem.appendChild(playListElem);
//         }
// }