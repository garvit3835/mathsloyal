import Solution from "../../../model/Solution";
// import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const createSolution = async (req, res) => {
	if (req.method === 'POST') {
		let data = await Solution.create({
			"_id": mongoose.Types.ObjectId(req.body.issueId),
			"image": req.body.image,
			"message": req.body.message,
			"tutor": mongoose.Types.ObjectId(req.body.tutorId),
		});
		console.log("solution created")
		res.status(200).json(data)
	} else {
		res.status(400).json({message: "Method not allowed"})
	}
    
};

export default connectDB(createSolution);