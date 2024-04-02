const jwt = require("jsonwebtoken");
const employeeMasterSchema = require("../model/employeeMasterSchema");
const ErrorResponse = require("../utilities/ErrorResponse");
const { JWT_SECRET } = require("../config");

exports.protect = async(req,res,next)=>{
    var token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token)
    {
        return next(new ErrorResponse(401,"Unauthorized"))
    }

    //! decode token 

    try{
        //! verify 
        const decoded = jwt.verify(token, JWT_SECRET);
        // console.log(decoded);
        req.user = await employeeMasterSchema.findById(decoded.id);
        next();
    }catch(err)
    {
        return next(new ErrorResponse(401,"not authorized to this route"))
    }
}


//! GRANT ACCESS TO SPECIFIES ROLES 

exports.authorize = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.Role))
        {
            return next(
                new ErrorResponse(
                    403,
                    `user role ${req.user.Role} is not authorizied to access this route`
                )
            )
        }
        next();
    }
}