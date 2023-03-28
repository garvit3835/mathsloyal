import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const getStudentIssues = async (tutorId) => {
    let data = await Issue.find({ tutor:tutorId  });
    // return data?.issues
    if (data) {
        return data
    } else {
        return false
    }

};
connectDB(getStudentIssues)
export default getStudentIssues;