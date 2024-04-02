const{Schema,model} = require("mongoose");

let participantSchema = new Schema ({

    trainingCode : {
        type: Schema.Types.ObjectId,
        ref:"program"
    },
    participantId: {
        type: Schema.Types.ObjectId,
        ref:"employee"
       
    }
},
{
    timestamps:true
})

module.exports = model('participant', participantSchema);