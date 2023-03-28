import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import findSolution from "../solution/findSolution";
const mongoose = require('mongoose');

const assignIssue = async (req, res) => {
	if (req.method === 'POST') {
		let data = await Issue.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(req.body.issueId) },
			{ $set: { tutor: mongoose.Types.ObjectId(req.body.tutorId) } },
			{ new: true }
		);
		console.log(`issue assigned to ${req.body.tutorId}`)
		setTimeout(async() => {
			const info = await findSolution(req.body.issueId)
			if (info) {
				console.log("issue alreaady solved")
				return info
			} else {
				console.log(`deassigning tutor`)
				data = await Issue.updateOne(
					{ _id: mongoose.Types.ObjectId(req.body.issueId) },
					{ tutor: null }
				);
			}
		}, 10000);
		res.status(200).json(data)
	} else {
		res.status(400).json({message: "Method not allowed"})
	}
	
};

export default connectDB(assignIssue);
