const nodemailer = require("nodemailer");
import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const newOTP = Math.floor(100000 + Math.random() * 900000)
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "mathsloyalpvt.ltd@gmail.com",
                pass: process.env.GENERATED_PASS,
            },
        });
    
        let mailDetails = {
            from: "mathsloyalpvt.ltd@gmail.com",
            to: "garvit3835@gmail.com",
            subject: "Mathsloyal - Email verification",
            text: `The One-time password for email verification is ${newOTP}`,
        };
        await Student.updateOne(
            { _id: mongoose.Types.ObjectId(req.body.studentId) },
            { $set: {OTP: newOTP}}
        )
    
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                res.status(400).json({ error: err });     
            } else {
                // console.log("Email sent successfully");
                res.status(200).json({data: "Email sent to the registered Email ID"})
            }
        });
        
    } else {
        // console.log(OTP)
        res.send("wrong method")
    }
	// console.log(newOTP)
}

// sendEmail()
// console.log(newOTP)

// export {newOTP}
export default connectDB(sendEmail);
