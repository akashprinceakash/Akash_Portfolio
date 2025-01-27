const express=require('express');
const routers=express.Router();
const {createContactform}=require('../Controller/ContactController');

routers.post('/form',createContactform);

module.exports=routers;