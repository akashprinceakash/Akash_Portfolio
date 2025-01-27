const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
let Port=8000;
const cors=require('cors');

app.use(express.json());
app.use(cors());

const routes=require('./Router/index');
app.use('/',routes)
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://akashprinceakash9986:Akash2002@cluster0.cdabd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
    app.listen(Port,()=>console.log("Server is running at port number 8000"))
    console.log("MongoDB Connected");  
})
.catch((error) =>{
     console.log("failed to connect "+error)
})
// app.listen(Port, () => {
//     console.log("Server is running at port number 8000");
// });
