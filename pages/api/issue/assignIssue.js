import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import findSolution from "../solution/findSolution";
import Solution from "../../../model/Solution";
const mongoose = require("mongoose");

const assignIssue = async (req, res) => {
	if (req.method === "POST") {
		let data = await Issue.findOne({
			_id: mongoose.Types.ObjectId(req.body.issueId),
		});
		console.log(data);
		if (!data.tutor) {
			data.tutor = await mongoose.Types.ObjectId(req.body.tutorId);
			await data.save();
			res.status(200).json(data);
			console.log(`issue assigned to ${req.body.tutorId}`);
			setTimeout(async () => {
				// const info = await findSolution(req.body.tutorId)
				const info = await Solution.findOne({
					_id: mongoose.Types.ObjectId(req.body.issueId),
				});
				if (info) {
					console.log("issue alreaady solved");
					return info;
				} else {
					console.log(`deassigning tutor`);
					data = await Issue.updateOne(
						{ _id: mongoose.Types.ObjectId(req.body.issueId) },
						{ tutor: null }
					);
				}
			}, 1800000);
		} else {
			res.status(400).json({ error: "Issue already assigned!" });
		}
	} else {
		res.status(400).json({ message: "Method not allowed" });
	}
};

export default connectDB(assignIssue);
