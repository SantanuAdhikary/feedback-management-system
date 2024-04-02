const employeeMasterSchema = require('../model/employeeMasterSchema');



exports.createEmployee = async (req,res) => {

    let payload = await employeeMasterSchema.create(req.body);
    res
    .status(201)
    .json({success:true, message : "successfully employee created", payload})
}

exports.allEmployee = async(req,res)=>{

    try{
        let payload = await employeeMasterSchema.find({});
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


exports.singleEmp = async(req,res)=>{

    try{
        let payload =   await employeeMasterSchema.findOne({_id : req.params.id});
        res.status(201)
        .json({ message:"data is found" , status:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}



exports.updateEmp = async(req, res) => {
    try {
        const payload = await employeeMasterSchema.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );

        if (payload.modifiedCount === 0) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        res.status(201).json({ message: "Data updated successfully", success: true, payload });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}


exports.deleteEmp = async(req,res) =>{
    try{

        
        
        await employeeMasterSchema.deleteOne({_id: req.params.id})
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