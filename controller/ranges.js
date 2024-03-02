const Range = require("../models/ranges");
const connectDB = require("../db/connect");

const getAllRanges = async (req, res) => {
    console.log(req.query)
    const { Title, sort, select, ShortDescription } = req.query;
    sort ? (sort = sort.replaceAll(",", " ")) : "";
    const queryObject = {};
    Title ? (queryObject.Title = { $regex: Title, $options: "i" }) : "";
    console.log(queryObject)
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;
    const myData = Title ? await Range.find(queryObject) : await Range.find(queryObject).skip(skip).limit(limit);
    const total = await Range.countDocuments(queryObject);
    res.status(200).json({ myData, nbHits: total });
  };
  const getAllRangesTesting = async (req, res) => {
    const myData =
      sort !== ""
        ? await Range.find(req.query).sort(sort)
        : await Range.find(req.query).sort(sort).select("Title");
    res.status(200).json({ myData });
  };
  const saveRanges = async (req, res) => {
    try {
      await connectDB();
      await Range.create(req.body);
      res.status(201).json({ status: 201, info });
    } catch (error) {
      res.status(201).json({ status: 401 });
    }
  };
  const updateRange = async (req, res) => {
    try {
      await connectDB();
      await Range.updateOne(
        { _id: req.body.id },
        {
          $set: {
            Title: req.body.Title,
            Image1: req.body.Image1,
            Image2: req.body.Image2,
            Image3: req.body.Image3,
            Image4: req.body.Image4,
            Image5: req.body.Image5,
            Description: req.body.Description,
            AmazonUrl: req.body.AmazonUrl,
            FlipkartUrl: req.body.FlipkartUrl,
            Active: req.body.Active,
          },
        }
      );
      res.status(201).json({ status: 201, info });
    } catch (error) {
      res.status(201).json({ status: 401 });
    }
  };
  const deactivateRange = async (req, res) =>{
    try {
        await connectDB();
        await Range.updateOne(
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
const activateRange = async (req, res) =>{
    try {
        await connectDB();
        await Range.updateOne(
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
    getAllRanges,
    getAllRangesTesting,
    saveRanges,
    updateRange,
    deactivateRange,
    activateRange
  };