const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req, res) =>{
    res.send('<h1> Assalamu Alaikum </h1> How are you? hope you are well');
})

app.listen(port, ()=>{
    console.log("listening to the port");
})