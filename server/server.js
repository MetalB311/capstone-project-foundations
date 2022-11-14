const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const {getSong} = require ('./controller')

// app.use(express.static('client/songs'))
app.use(express.static('client'))

app.get('/getsong', getSong)



app.listen(6660, () => {
    console.log('Up on 6660!')
})