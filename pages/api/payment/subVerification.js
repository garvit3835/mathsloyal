var crypto = require("crypto");
import Issue from "../../../model/Issue";
import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

async function handler(req, res) {
	if (req.method === "POST") {
		let body =
			req.body.razorpay_order_id +
			"|" +
			req.body.razorpay_payment_id;

		var expectedSignature = crypto
			.createHmac("sha256", process.env.RAZORPAY_KEY)
			.update(body.toString())
			.digest("hex");
		console.log("sig received ", req.body.razorpay_signature);
		console.log("sig generated ", expectedSignature);
		var response = { signatureIsValid: "false" };
		if (expectedSignature === req.body.razorpay_signature) {
			response = { signatureIsValid: "true" };
			await Issue.findOneAndUpdate(
				{ _id: mongoose.Types.ObjectId(req.body.issueId) },
				{ $set: { payment: true } },
				{new: true}
            )
            await Student.findByIdAndUpdate(
                req.body.studentId,
                {queCount: {$inc: -1}}
            )
			let data = await Issue.findOne({ orderId: req.body.razorpay_order_id })
			res.redirect(`/user/doubt?question=${data.issueId}`)
		}
			
		} else {
		res.status(400).json({ error: "Method not allowed!" });
	}
}
export default connectDB(handler);