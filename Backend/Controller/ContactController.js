const FromDetails = require('../Model/ContactformSchema');

//formpost Post
exports.createContactform=async(req,res)=>{
    try{
    const formdata=req.body;
    const formDatas=FromDetails.create(formdata);
    res.status(200).json({
        success:true,
        data:formDatas
    })
    }
    catch(error){
     res.status(500).json({
      success:false,
      message:"error fetching restaurants",
      error:error.message
    })
  }
}

//getformdetails
