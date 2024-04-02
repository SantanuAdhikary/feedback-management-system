
const courseSchema= require("../model/courseSchema");

exports.createCourse = async (req,res)=>{

    let payload = await courseSchema.create(req.body);
    res
    .status(201)
    .json({success:true, message : "successfully course created", payload})
}

exports.allCourse = async(req,res)=>{
   let  courses =  await courseSchema.find();
   if(!courses){                            
    return res.status(404).json({ success: false ,message:"No Course Found"});                             
   }else{
       return res.status(200).json({ success: true ,data:courses })
   }
}

exports.singleCourse = async (req,res)=> {

    let course = await courseSchema.findOne({_id: req.params.id});
    if (!course) {
        return res.status(404).json({ success:false ,message:'The course with the given ID was not found.'})
    } else {    
      return res.status(200).json({ success: true ,single_course:course})
}
}
     
exports.updateCourse = async(req,res)=>{

    let  updated_course = await courseSchema.updateOne(
        { _id : req.params.id },
        {$set:req.body},
         {new:true}
    )
   res.status(200).json({
       success:true,
       message : 'Successfully Updated',
       data:updated_course
   });
}
