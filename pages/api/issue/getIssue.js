import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const getIssue = async (req, res) => {
	if (req.method === "POST") {
		let data = await Issue.findOne({
			tutor: null,
			_id: { $ne: mongoose.Types.ObjectId(req.body.issueId) },
		});
		console.log("issue suggested to tutors");
		res.status(200).json(data);
	} else {
		res.status(400).json({message: "Method not allowed"})
	}
};

export default connectDB(getIssue);
