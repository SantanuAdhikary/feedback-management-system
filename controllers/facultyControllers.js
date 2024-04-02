const facultySchema = require('../model/facultySchema');
const employee = require('../model/employeeMasterSchema')

exports.createFaculty = async(req,res)=>{

    let payload = await facultySchema.create(req.body);

    res
    .status(201)
    .json({message:"faculty created", success:true,payload})
}

exports.allFaculty = async(req,res)=>{

    try{
        // let payload = await facultySchema.aggregate(
        //    [ {
        //         $lookup : {
        //             from: "employees",
        //             localField:"facultyId",
        //             foreignField:"EmployeeId",
        //             as:"employee details"
        //         }
        //     }]
        // )

        let payload=await facultySchema.create(req.body);
        await payload.save()
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
exports.allFaculty = async(req,res)=>{

    try{
        let payload = await facultySchema.find({}).populate("facultyId");
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

exports.singleFaculty = async(req,res)=>{

    try{
        let payload =   await facultySchema.findOne({_id : req.params.id});
        res.status(201)
        .json({ message:"data is found" , status:true,payload})
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.updateFaculty = async(req, res) => {
    try {
        const payload = await facultySchema.updateOne(
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

exports.deleteFaculty = async(req,res) =>{
    try{
        
        await facultySchema.deleteOne({_id: req.params.id})
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