
const programSchema= require('../model/trainingProgramSchema');



exports.createProgram = async (req,res) => {

    let payload = await programSchema.create(req.body);
    await payload.save();
    res
    .status(201)
    .json({success:true, message : "successfully programs added", payload})
}

exports.allProgram= async(req,res)=>{

    try{
        let payload = await programSchema.find({}).populate(["CourseCode","FacultyCode"]);
        res.status(200)
        .json({
            status: true,
            payload,
            message:"getting all data "
        })
    }catch(err)
    {
        console.log(err)
    }
}

exports.singleProgram= async(req,res)=>{

    try{
        
        let payload =   await programSchema.findOne({_id : req.params.id}).populate(["CourseCode","FacultyCode"]);

        if (!payload) return res.status(400).send("Invalid user Id");
    
    
        res.status(201)
        .json({ message:"data is found" , status:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.updateProgram= async(req, res) => {
    try {
        const payload = await programSchema.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );

        if (payload.modifiedCount === 0) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        res.status(201).json({ message: "Data updated successfully", success: true,payload });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

exports.deleteProgram= async(req,res) =>{
    try{
        
        await programSchema.deleteOne({_id: req.params.id})
        res.status(203)
        .json({
            success:true,
            message:"successfully deleted ",
            
        })
    }
        catch(err)
        {
            console.log(err);
        }
    }