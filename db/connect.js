const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

uri = 'mongodb+srv://sheetaldhingra09:yCnwPQ0hTR7hioml@vpsapi.q5r8nt3.mongodb.net/VPSApi?retryWrites=true&w=majority'

const connectDB = () =>{
    return mongoose.connect(uri,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then()
        .catch(err => console.log(err));
}

module.exports = connectDB;