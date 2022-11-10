const form = document.querySelector('form')
const div1 = document.querySelector('div1')


const getSong = () => {
    axios.get("http://localhost:6660/getsong")
    .then((res) => {
        // in here what are we doing with the song, that we GOT
        autoPlay.res.data
    })
    .catch((err) => {
        console.log(err)
    })
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
}


div1.addEventListener('click', getSong)
div1.addEventListener('click', showAllSongs)
form.addEventListener('submit', addSong)