const {Schema,model}= require("mongoose");

let feedbackSchema = new Schema({
        trainingCode: {
             type: Schema.Types.ObjectId,
             ref:"program"
        },
       participantId: {
        type : Schema.Types.ObjectId,
        ref:"employee"
       },
       prs_comm: {
        type:Number
       },
       
       clrfy_dbts: {
        type:Number
       },
     
       timeManagement:{
        type:Number
       },
    
       handOut: {
        type:Number
       },
       
       hw_sw_network: {
        type:Number
       },
       comments:{
         type:String
       },
       suggestion:{
            type: String
       }
},
{
     timestamps:true
})

module.exports= model('feedback', feedbackSchema)