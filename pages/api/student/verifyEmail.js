import Student from "../../../model/Student";
import { newOTP } from "./sendEmail";
// import sendEmail from "./sendEmail";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await Student.findById(req.body.studentId)
        // console.log(newOTP)
        if (data.OTP === req.body.OTP) {
            let data = await Student.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(req.body.studentId) },
                {$set: {verified: true} },
                {new: true}
            )
            res.status(200).json(data)
        } else {
            res.status(400).json({error: "Incorrect OTP"})
        }
    } else {
        res.send("wrong method")
    }
	
}
export default connectDB(handler);