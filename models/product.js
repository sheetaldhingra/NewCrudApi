const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    ShortDescription:{
        type:String
    },
    LongDescription:{
        type:String
    },
    IsShow:{
        type:Boolean,
        default:false,
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

module.exports = mongoose.model('Product',productsSchema);