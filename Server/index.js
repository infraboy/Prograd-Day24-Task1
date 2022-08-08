const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {mongoose} =require('../config/db')
var user=require('../controller/userController')
var app =express()
app.use(bodyParser.json())
app.use(cors({origin:'*'}));

app.listen(process.env.PORT || 1234,() => console.log('Server started at port:1234'));
app.use('/user',user);