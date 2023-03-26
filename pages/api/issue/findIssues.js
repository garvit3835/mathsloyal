import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
import getStudentIssues from "../student/getStudentIssues";
// const ObjectId = mongoose.Schema.ObjectId;

const findIssues = async (studentId) => {
    let issues = await getStudentIssues(studentId)
    const data = await Issue.find({_id: {$in: issues}})
	console.log("issue suggested to tutors")
	return data
};
connectDB(findIssues)
export default findIssues;