import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const getStudentIssues = async (studentId) => {
	let data = await Student.findOne({ _id: mongoose.Types.ObjectId(studentId) });

	if (data) {
		return data.issues
	} else {
		return false
	}

};
connectDB(getStudentIssues)
export default getStudentIssues;