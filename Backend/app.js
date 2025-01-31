const express=require('express');
// const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const env=require('dotenv').config({path : './Config/.env'});
let Port=process.env.PORT_NUM;
app.use(express.json());
app.use(cors());

const routes=require('./Router/index');
app.use('/',routes)
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect('mongodb+srv://akashprinceakash9986:Akash2002@cluster0.cdabd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.listen(Port,(error) =>{
    if(error){
        console.log("failed to to server");     
    }else{
    console.log("Server is running at port number 8000");
    }
})
// .then((res)=>{
//     console.log("MongoDB Connected")
// })
// .catch((error) =>{
//      console.log("failed to connect "+error)
// })
// app.listen(Port, () => {
//     console.log("Server is running at port number 8000");
// });
