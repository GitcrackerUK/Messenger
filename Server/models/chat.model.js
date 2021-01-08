
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema (
{
    User:{
        chatId:String,
       user:{
        icon:String,
        name:String
       },
       userChat:[
        {
            user:Boolean,
            text:String,
            time:String,
        }
       ]
       }
},{
    timestamps:true,
});
const UserChat = mongoose.model('UserChat', chatSchema );

module.exports = UserChat