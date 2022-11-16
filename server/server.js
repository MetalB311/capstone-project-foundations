const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const path = require('path')

const {getSong} = require ('./controller')


app.use('/client', express.static(path.join(__dirname, '../client')))


app.get('/getsong', getSong)



app.listen(6660, () => {
    console.log('Up on 6660!')
})