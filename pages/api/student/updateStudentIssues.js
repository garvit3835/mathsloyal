import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const updateStudentIssues = async (studentId, issueId) => {
    const data = await Student.updateOne(
        { _id: studentId },
        {$push: {issues: issueId}}
    )
    return data
};
connectDB(updateStudentIssues)
export default updateStudentIssues;