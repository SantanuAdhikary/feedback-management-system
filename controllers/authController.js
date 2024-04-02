const authSchema = require('../model/employeeMasterSchema');
const ErrorResponse = require('../utilities/ErrorResponse');
const {JWT_COOKIE_EXPIRE, JWT_SECRET, JWT_EXPIRE} = require('../config')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")



exports.registerController = async(req,res)=>{
    let payload = await authSchema.create(req.body);
    res
    .status(201)
    .json({success:true, message : "successfully registered", payload})
}


exports.loginController = async(req,res,next)=>{
    try{

        const {EmployeeName, Password} = req.body;

        if(! EmployeeName  || !Password)
        return next(new ErrorResponse(400,"please provide valid name or password"))

        const  employee = await authSchema.findOne({EmployeeName}).select("+Password"); 
        //! because in schema we wrote passrord select as false

        if(!employee){
            return next(new ErrorResponse(401 ,'Invalid credentials'));
        }

       
        const isMatch = await  bcrypt.compare(Password, employee.Password) ;

        if(!isMatch)
        return next(new  ErrorResponse(401,'Invalid credentials'));

        // res.status(200).json({success:true,message:"successfully loggedin ", employee})

        // sendTokenResponse(employee._id,200,res)

         //! create token 

    const token = jwt.sign({id:employee.id}, JWT_SECRET,{expiresIn: JWT_EXPIRE})
    const options = {

        expires: new Date(Date.now() + JWT_COOKIE_EXPIRE*24*60*60*1000 ) ,
        httpOnly:true,
    }

    if(process.env =="production")
    {
        options.secure= true
    }
    res
    .status(200)
    .cookie("token", token,options)
    .json({success: true, token})

    }catch(err)
    {
        console.log(err);
    }
}


// const sendTokenResponse =  (userId,statusCode,res)=>{

//     //! create token 

//     const token = jwt.sign({id:userId}, JWT_SECRET,{expiresIn: JWT_EXPIRE})
//     const options = {

//         expires: new Date(Date.now() + JWT_COOKIE_EXPIRE*24*60*60*1000 ) ,
//         httpOnly:true,
//     }

//     if(process.env =="production")
//     {
//         options.secure= true
//     }
//     res
//     .status(statusCode)
//     .cookie("token", token,options)
//     .json({success: true, token})
// }