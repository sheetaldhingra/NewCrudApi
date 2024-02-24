const mongoose = require("mongoose");

const rangesSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Image1:{
        type:String
    },
    Image2:{
        type:String
    },
    Image3:{
        type:String
    },
    Image4:{
        type:String
    },
    Image5:{
        type:String
    },
    Description:{
        type:String
    },
    AmazonUrl:{
        type:String
    },
    FlipkartUrl:{
        type:String
    },
    createDate:{
        type:Date,
        default:Date.now()
    },
    Active:{
        type:Boolean,
        default:true,
    },
})

module.exports = mongoose.model('Range',rangesSchema);