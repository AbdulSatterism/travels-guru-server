const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const travels = require('./data/travels.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Travel Guru is running on ')
})

app.get('/travels', (req, res) => {
    res.send(travels)
})

app.get('/travels/:id', (req, res) => {
    const id = (req.params.id);
    const findTravel = travels.find(tr => tr.id === id);
    res.send(findTravel)

})
app.get('/book/:id', (req, res) => {
    const id = (req.params.id);
    const bookingId = travels.find(tr => tr.id === id);
    res.send(bookingId)

})

app.listen(port, () => {
    console.log('port is running', port)
})