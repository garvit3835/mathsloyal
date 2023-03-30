import Solution from "../../../model/Solution";
// import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.ObjectId;

const getSolution = async (req, res) => {
    if (req.method === 'POST') {
        let data = await Solution.findOne({ "_id": mongoose.Types.ObjectId(req.body.issueId)});
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "solution does not exist" })
    }

    } else {
        res.status(400).json({message: "Method not allowed"})
    }
    
};

export default connectDB(getSolution);