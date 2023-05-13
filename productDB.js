const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./products.json');
const multer = require("multer");
const start = async()=>{
    try {
        await connectDB();
        await Product.create(ProductJson);
        console.log("Success");
    } catch (error) {
        console.log(error)
    }
}
module.exports = {start};