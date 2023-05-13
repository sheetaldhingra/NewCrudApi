const mongoose = require("mongoose");
const machinesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    Description:{
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

module.exports = mongoose.model('Machines',machinesSchema);