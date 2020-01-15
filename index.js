const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res, next) => {
    res.send('Hello World this is Dominic\'s space!!')
    
})
app.use('/api', movieRouter);

// Create a server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} Feel the shit!`);
});