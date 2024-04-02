const {Schema, model} = require("mongoose");


let programSchema = new Schema({

    TrainingCode : {
        type: Number,
        required:true
    },
    CourseCode : {
        type:Schema.Types.ObjectId, 
        ref:"course"
    },
    FacultyCode: {
        type:Schema.Types.ObjectId,
        ref:"faculty"
    },
    StartDate: {
        type:String,
        required:true
    },
    EndDate: {
        type:String,
        required:true
    }
},
{
    timestamps:true
})

module.exports = model('program',programSchema);