const validatorrole=(req,res,next)=>{
    if(req.user.role==="admin") {
        next()
    }
  return   res.status(400).json( {message:"only admin access do this  "})
}
module.exports=validatorrole