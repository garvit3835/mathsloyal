import Solution from "../../../model/Solution";
// import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.ObjectId;

const findSolution = async (issueId) => {
    let data = await Solution.findOne({ "_id": mongoose.Types.ObjectId(issueId), });
    if (data) {
        console.log("solution exists")
    } else {
        console.log("solution does not exist")
    }
	return data
};
connectDB(findSolution)
export default findSolution;