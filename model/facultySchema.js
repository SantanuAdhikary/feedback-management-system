const {Schema, model, default: mongoose} = require("mongoose");

let facultySchema = new Schema({
   
    facultyId: 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref:"employee"
         },
    
    skills: {
        type:[" "],
        required:true
    }
},
{
    timestamps:true
})




let faculty = model("faculty",facultySchema);

module.exports = faculty;