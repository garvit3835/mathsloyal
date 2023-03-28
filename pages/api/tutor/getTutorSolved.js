import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const getTutorSolved = async (tutorId) => {
	let data = await Tutor.findOne({ _id: mongoose.Types.ObjectId(tutorId) });
	if (data.issues) {
		return data.solved
	} else {
		return false
	}
};
connectDB(getTutorSolved)
export default getTutorSolved;