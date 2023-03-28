// import Solution from "../../../model/Solution";
// // import Issue from "../../../model/Issue";
// import connectDB from "../../../middleware/mongoose";
// const mongoose = require('mongoose');
// // const ObjectId = mongoose.Schema.ObjectId;

// const findSolution = async (issueId) => {
//     let data = await Solution.findOne({ "_id": mongoose.Types.ObjectId(issueId), });
//     if (data) {
//         console.log("solution exists")
//     } else {
//         console.log("solution does not exist")
//     }
// 	return data
// };
// connectDB(findSolution)
// export default findSolution;
import Solution from "../../../model/Solution";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
import getTutorSolved from "../tutor/getTutorSolved";
// const ObjectId = mongoose.Schema.ObjectId;

const findSolutions = async (req, res) => {
    if (req.method === "POST") {
        let solutions = await getTutorSolved(req.body.tutorId);
        if (solutions) {
            const data = await Solution.find({ _id: { $in: solutions } });
            res.status(200).json(data);
        } else {
            res.status(400).json({ error: "No data available" })
        }
    } else {
        res.status(400).json({ message: "Method not allowed" });
    }
};

export default connectDB(findSolutions);