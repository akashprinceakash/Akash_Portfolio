// const mongoose=require('mongoose');

// const contactform=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true , "Name is required"],
//         trim:true,
//         minlength:[3 , 'Name must be at least 3 characters long'],
//         maxlength:[50 , 'Name cannot exeed 50 characters']   
//     },
//     email:{
//         type:String,
//         reuired:[true , 'Email is required'],
//         trim:true,
//         lowercase:true,
//         match:[
//             /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//             'please enter a valid email address'
//         ],
//     },
//     mobileno:{
//         type:Number,
//         required:true
//     },
//     message:{
//         type:String
//     },
// })

// const FromDetails= mongoose.model('FromDetails', contactform);
// module.exports=FromDetails