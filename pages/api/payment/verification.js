var crypto = require("crypto");

async function handler(req, res) {
	if (req.method === "POST") {
		let body =
			req.body.response.razorpay_order_id +
			"|" +
			req.body.response.razorpay_payment_id;

		var expectedSignature = crypto
			.createHmac("sha256", process.env.RAZORPAY_KEY)
			.update(body.toString())
			.digest("hex");
		console.log("sig received ", req.body.response.razorpay_signature);
		console.log("sig generated ", expectedSignature);
		var response = { signatureIsValid: "false" };
		if (expectedSignature === req.body.response.razorpay_signature)
			response = { signatureIsValid: "true" };
		res.status(200).json(response);
	} else {
		res.status(400).json({ error: "Method not allowed!" });
	}
}
export default handler;
