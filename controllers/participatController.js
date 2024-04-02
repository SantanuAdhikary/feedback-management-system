const participantSchema = require('../model/participantSchema');


exports.createParticipant = async(req,res)=>{
    let payload = await participantSchema.create(req.body)
    await payload.save();

    res.status(201).json({message:"successfully participants created",success:true, payload})
}

exports.allParticipant = async(req,res)=>{

    try{
        let payload = await participantSchema.find({}).populate(["trainingCode","participantId"]);
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

exports.singleParticipant = async(req,res)=>{

    try{
        let payload =   await participantSchema.findOne({_id : req.params.id}).populate(["trainingCode","participantId"]);
        res.status(201)
        .json({ message:"data is found" , status:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.updateParticipant = async(req, res) => {
    try {
        const payload = await participantSchema.updateOne(
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

exports.deleteParticipant = async(req,res) =>{
    try{
        
        await participantSchema.deleteOne({_id: req.params.id})
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