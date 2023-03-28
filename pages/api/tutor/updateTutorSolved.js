import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const updateTutorSolved = async (TutorId, issueId) => {
    const data = await Tutor.updateOne(
        { _id: mongoose.Types.ObjectId(TutorId) },
        { $push: { solved: mongoose.Types.ObjectId(issueId) } }
    )
    return data
};
connectDB(updateTutorSolved)
export default updateTutorSolved;