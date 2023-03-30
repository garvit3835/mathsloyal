const Razorpay = require("razorpay");
const shortid = require("shortid");

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_ID,
	key_secret: process.env.RAZORPAY_KEY,
});

async function handler(req, res) {
	if (req.method === "POST") {
		const payment_capture = 1;
		const amount = req.body.amount; // amount in paisa.
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
		res.status(200).json(order);
    } else {
        res.status(400).json({message: "Method not allowed"})
    }
}
export default handler;