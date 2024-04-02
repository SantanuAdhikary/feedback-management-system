const {Schema, model }= require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const {JWT_SECRET,JWT_EXPIRE} = require('../config/index')

const employeeMasterSchema = new Schema({

    EmployeeId : {
        type: String,
        required:true,
       
    },
    EmployeeName : {
        type: String,
        required:true,
        
    },
    Password : {
        type: String,
        required:true,
        select:false
    },
    Role : {
        type: String,
        required:true,
        
    }
},
{
    timestamps:true
})

employeeMasterSchema.pre('save', async function(){

    let salt =await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password ,salt) ; 
})


// employeeMasterSchema.methods.isValidPassord = async function (password){
//      return await bcrypt.compare(password , this.Password )
// }


// employeeMasterSchema.methods.getSignedJWTtoken = function(){
//     return jwt.sign({id:this._id}, JWT_SECRET,{expiresIn: JWT_EXPIRE})
// }

let employee = model("employee", employeeMasterSchema)
module.exports = employee;