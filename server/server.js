const express = require('express')
const cors = require('cors')

let app = express()

app.use(cors())
app.use(express.json())

const {getSong} = require ('../client/controller')

app.get('/getsong', getSong)




app.listen(6660, () => {
    console.log('Up on 6660!')
})