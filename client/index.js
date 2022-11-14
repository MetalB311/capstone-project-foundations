const form = document.querySelector('form')
const div1 = document.querySelector('div1')
const getsong = document.querySelector('#getsong')
const randAudio = document.querySelector('#randAudio')

songArray = ['client/01_Laid_to_Rest.mp3', 'client/01_Walk_With_Me_In_Hell.mp3' ]
 
const getSong = () => {
    // let songs = document.querySelectorAll('audio')
        
        // autoplay.songs
        let randomSongFilePath = songArray[Math.floor(Math.random() * songArray.length)]
    console.log(randomSongFilePath)
randAudio.src = randomSongFilePath
    randAudio.play()
}

















function showAllSongs (event) {
    event.preventDefault()
    
}


function addSong (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let song = document.createElement('li')
    let songTitle = document.createElement('span')
    songTitle.textContent = inputField.value
    // I believe ^^^^^^^ that needs to be a file, not textcontent
    song.appendChild(songTitle)
    let list = document.querySelector('ul')
    list.appendChild(song)
    inputField.value= ''
    alert('song added')
}


getsong.addEventListener('click', getSong)
div1.addEventListener('click', showAllSongs)
form.addEventListener('submit', addSong)