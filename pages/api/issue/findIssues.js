import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
import getStudentIssues from "../student/getStudentIssues";
// const ObjectId = mongoose.Schema.ObjectId;

const findIssues = async (req, res) => {
	if (req.method === "POST") {
		let issues = await getStudentIssues(req.body.studentId);

		// if (issues) {
			const data = await Issue.find({ _id: { $in: issues } });
			if (data) {
				res.status(200).json(data);
			}
		 else {
			res.status(400).json({ error: "No data available" });
		}
			// res.status(200).json(data);
		// } else {
		// 	res.status(400).json({ error: "No data available" });
		// }

	} else {
		res.status(400).json({ message: "Method not allowed" });
	}
};

export default connectDB(findIssues);
