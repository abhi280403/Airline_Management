const express = require('express');
const app = express();

const port = 4840;


app.get('/', (req,res) =>{
    res.send('Welcome to the Backend Server');
})


app.listen(port, (req,res) =>{
    console.log(`Server started on port ${port}`);
})