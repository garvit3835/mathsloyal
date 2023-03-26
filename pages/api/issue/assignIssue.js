import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import findSolution from "../solution/findSolution";
const mongoose = require('mongoose');

const assignIssue = async (issueId, tutorId) => {
	let data = await Issue.findOne(
		{ _id: mongoose.Types.ObjectId(issueId) }
	)
	data.tutor = await mongoose.Types.ObjectId(tutorId)
	await data.save()
	console.log(`issue assigned to ${data.tutor}`)
	setTimeout(async() => {
		const info = await findSolution(issueId)
		if (info) {
			console.log("issue alreaady solved")
			return info
		} else {
			console.log(`deassigning tutor`)
			data = await Issue.updateOne(
				{ _id: mongoose.Types.ObjectId(issueId) },
				{ tutor: null }
			);
		}
	}, 10000);
	return data
};
connectDB(assignIssue)
export default assignIssue;
