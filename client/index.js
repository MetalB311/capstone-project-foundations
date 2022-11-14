const form = document.querySelector('form')
const div1 = document.querySelector('div1')
const getsong = document.querySelector('#getsong')
const randAudio = document.querySelector('#randAudio')
const stopsong = document.querySelector('#stopsong')
const allsongs = document.querySelector('#allsongs')

let list = document.querySelector('ul')

songArray = ['01_Laid_to_Rest.mp3', '01_Walk_With_Me_In_Hell.mp3', '02_Nothing_Left.m4a', '04_11th_Hour.mp3', '05_Fake_Messiah.mp3', '05_New_Colossal_Hate.m4a', '08_Through_Struggle.mp3', '09_The_Beginning.mp3' ]

const getSong = () => {
        let randomSongFilePath = songArray[Math.floor(Math.random() * songArray.length)]
    console.log(randomSongFilePath)
randAudio.src = randomSongFilePath
    randAudio.play()
    alert(randomSongFilePath)
}

const stopSong = () => {
    randAudio.pause()
}


function showAllSongs (event) {
    event.preventDefault()
    for (let i=0; i < songArray.length; i++){
        let song = document.createElement('li')
        song.innerHTML = songArray[i]
        list.appendChild(song)    
    }
}


function addSong (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let song = document.createElement('li')
    let songTitle = document.createElement('span')
    songTitle.textContent = inputField.value
    // I believe ^^^^^^^ that needs to be a file, not textcontent
    song.appendChild(songTitle)
    list.appendChild(song)
    inputField.value= ''
    alert('song added')
}


getsong.addEventListener('click', getSong)
stopsong.addEventListener('click', stopSong)
allsongs.addEventListener('click', showAllSongs)
form.addEventListener('submit', addSong)