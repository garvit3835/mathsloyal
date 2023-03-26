import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import updateStudentIssues from "../student/updateStudentIssues";
var mongoose = require('mongoose')

const createIssue = async (image, message, studentId) => {
	let data = await Issue.create({
		"image": image,
		"message": message,
		"student": mongoose.Types.ObjectId(studentId),
		// "tutor": tutor_id,
	});
	await updateStudentIssues(studentId, data._id)
	console.log("issue created")
	return data
};
connectDB(createIssue)
export default createIssue;
