const Razorpay = require("razorpay");
const shortid = require("shortid");
import Promo from "../../../model/Promo";
import Student from "../../../model/Student";
import Issue from "../../../model/Issue";

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_ID,
	key_secret: process.env.RAZORPAY_KEY,
});

async function handler(req, res) {
	if (req.method === "POST") {
		// const info = await Promo.findOne({ code: req.body.promo, count: { $gt: 0 } })
        // if (info) {
        //     const data = await Student.updateOne(
        //         { _id: mongoose.Types.ObjectId(req.body.studentId) },
        //         {promo: req.body.code}
        //     )
        //     --info.count;
        //     await info.save()
        //     res.redirect(`/user/doubt?question=${req.body.issueId}`)
        // }
		const payment_capture = 1;
		const amount = req.body.amount * 100 ; // amount in paisa.
		const currency = "INR";
		const options = {
			amount: amount.toString(),
			currency,
			receipt: shortid.generate(),
			payment_capture,
			notes: {
				studentId: req.body.studentId,
				issueId: req.body.issueId,
			},
		};
		const order = await razorpay.orders.create(options);
		await Issue.findByIdAndUpdate(
			req.body.issueId,
			{$set: {orderId: order.id}}
		)
		res.status(200).json(order);
    } else {
        res.status(400).json({message: "Method not allowed"})
    }
}
export default handler;