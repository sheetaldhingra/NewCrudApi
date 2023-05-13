const machines = require("../models/machineries");
const connectDB = require("../db/connect");

const getAllMachines = async (req, res) => {
  const { title, sort, select } = req.query;
  sort ? (sort = sort.replaceAll(",", " ")) : "";
  const queryObject = {};
  title ? (queryObject.title = { $regex: title, $options: "i" }) : "";
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;
  // const myData = await Product.find(queryObject).skip(skip).limit(limit);
  const myData = await machines.find(queryObject);
  res.status(200).json({ myData, nbHits: myData.length });
};
const saveMachines = async (req, res) => {
  // console.log(ProductJson);
  // console.log(req.body);
  //const {ProductsJson} = req.body;
  // ProductJson = req.body;
  //console.log(products);
  // console.log(ProductsJson);
  try {
    await connectDB();
    await machines.create(req.body);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    res.status(201).json({ status: 401 });
  }
};
const updateMachine = async (req, res) => {
  try {
    await connectDB();
    // await Product.create(req.body);
    await machines.updateOne(
      { _id: req.body.id },
      {
        $set: {
          title: req.body.title,
          image: req.body.image,
          Description: req.body.Description,
          Active: req.body.Active,
        },
      }
    );
    res.status(201).json({ status: 201, info });
  } catch (error) {
    res.status(201).json({ status: 401 });
  }
};
const deactivateMachine = async (req, res) =>{
    try {
        await connectDB();
        // await Product.create(req.body);
        await machines.updateOne(
          { _id: req.body.id },
          {
            $set: {
              Active: false,
            },
          }
        );
        res.status(201).json({ status: 201, info });
      } catch (error) {
        res.status(201).json({ status: 401 });
      }
}
const activateMachine = async (req, res) =>{
    try {
        await connectDB();
        // await Product.create(req.body);
        await machines.updateOne(
          { _id: req.body.id },
          {
            $set: {
              Active: true,
            },
          }
        );
        res.status(201).json({ status: 201, info });
      } catch (error) {
        res.status(201).json({ status: 401 });
      }
}
module.exports = {
    getAllMachines,
  saveMachines,
  updateMachine,
  deactivateMachine,
  activateMachine
};

//yCnwPQ0hTR7hioml
