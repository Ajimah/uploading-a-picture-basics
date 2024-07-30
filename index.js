const express = require('express');
const {connect} = require('./connect')
const {Router} = require('./routes');
const app = express();

connect()

app.use("/", Router)

app.listen(4000, () =>{
    console.log('listening on port 4000');
})