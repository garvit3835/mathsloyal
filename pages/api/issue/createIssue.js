import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import updateStudentIssues from "../student/updateStudentIssues";
var mongoose = require('mongoose')

const createIssue = async (req, res) => {
	if (req.method === 'POST') {
		let data = await Issue.create({
			"image": req.body.image,
			"message": req.body.message,
			"student": mongoose.Types.ObjectId(req.body.studentId),
			// "tutor": tutor_id,
		});
		await updateStudentIssues(req.body.studentId, data._id)
		console.log("issue created")
		res.status(200).json(data)
	} else {
		res.status(400).json({message: "Method not allowed"})
	}
	
};

export default connectDB(createIssue);
