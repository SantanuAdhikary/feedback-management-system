const {Schema, model} = require("mongoose");

let courseSchema = new Schema({
    courseId : {
        type : Number, 
        required:true
    },
    courseName: {
        type : String,
        required:true, 
    },
    duration: {
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

module.exports = model('course', courseSchema)