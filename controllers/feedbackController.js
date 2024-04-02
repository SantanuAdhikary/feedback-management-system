const feedbackSchema = require('../model/feedbackSchema');


exports.createFeedback = async(req,res)=>{
    let payload = await feedbackSchema.create(req.body)
    await payload.save();

    res.status(201).json({message:"successfully Feedbacks created",success:true, payload})
}

exports.allFeedback = async(req,res)=>{

    try{
        let payload = await feedbackSchema.find({}).populate(["participantId","trainingCode"]);
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

exports.singleFeedback = async(req,res)=>{

    try{
        let payload =   await feedbackSchema.findOne({_id : req.params.id}).populate(["participantId","trainingCode"]);
        res.status(201)
        .json({ message:"data is found" , status:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.updateFeedback = async(req, res) => {
    try {
        const payload = await feedbackSchema.updateOne(
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

exports.deleteFeedback = async(req,res) =>{
    try{
        
        await feedbackSchema.deleteOne({_id: req.params.id})
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