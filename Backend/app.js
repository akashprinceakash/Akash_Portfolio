const express=require('express');
// const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const nodemailer = require('nodemailer');
const app=express();
const cors=require('cors');
const env=require('dotenv').config({path : './Config/.env'});
let Port=process.env.PORT_NUM;
app.use(express.json());
app.use(cors());

const routes=require('./Router/index');
app.use('/',routes)
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(Port,(error) =>{
    if(error){
        console.log("failed to  server");     
    }else{
    console.log(`Server is running at port number ${Port}`);
    }
})
