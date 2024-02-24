const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const products_routes = require("./routes/products");
const machines_routes = require("./routes/machines");
const email_routes = require("./routes/sendEmail");
const ranges_routes = require("./routes/ranges");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hi, I am live");
});

app.use(bodyParser.urlencoded({ limit: '50mb',parameterLimit: 100000, extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use("/api/products",products_routes);
app.use("/api/ranges",ranges_routes);
app.use("/api/machines",machines_routes);
app.use("/api/email",email_routes);

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT, ()=>{
           console.log(`${PORT} Yes I am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();