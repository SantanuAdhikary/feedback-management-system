
const errorHandler = (error,req,res,next)=>{
    res.status(500 || error.statusCode).json({success:false,error:error.message})
}

module.exports = errorHandler;