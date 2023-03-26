import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const getIssue = async (issueId) => {
	let data = await Issue.findOne({ tutor: null, _id: { $ne: mongoose.Types.ObjectId(issueId) } });
	console.log("issue suggested to tutors")
	return data
};
connectDB(getIssue)
export default getIssue;