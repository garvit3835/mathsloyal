import Solution from "../../../model/Solution";
// import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const createSolution = async (issueId, image, message, tutorId) => {
    let data = await Solution.create({
        "_id": mongoose.Types.ObjectId(issueId),
		"image": image,
		"message": message,
		"tutor": mongoose.Types.ObjectId(tutorId),
	});
	console.log("solution created")
	return data
};
connectDB(createSolution)
export default createSolution;