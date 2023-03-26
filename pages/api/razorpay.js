// pages/api/razorpay.js
const Razorpay = require("razorpay");
const shortid = require("shortid");

// Initialize razorpay object
const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_ID,
	key_secret: process.env.RAZORPAY_KEY,
});

async function handler(req, res) {
	// TODO: Make sure to handle your payment here.
	// Create an order -> generate the OrderID -> Send it to the Front-end
	// Also, check the amount and currency on the backend (Security measure)
	if (req.method === "POST") {
		const payment_capture = 1;
		const amount = req.body.amount; // amount in paisa. In our case it's INR 1
		const currency = "INR";
		const options = {
			amount: amount.toString(),
			currency,
			receipt: shortid.generate(),
			payment_capture,
			notes: {
				// These notes will be added to your transaction. So you can search it within their dashboard.
				// Also, it's included in webhooks as well. So you can automate it.
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
