const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    tag:Object,
    reply:mongoose.Types.ObjectId,
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    postId:mongoose.Schema.Types.ObjectId,
    
},{
    timestamps:true
})
module.exports=mongoose.model('Comment',commentSchema);