import Promo from "../../../model/Promo";
// import Issue from "../../../model/Issue";
import connectDB from "../../../middleware/mongoose";
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const createPromo = async (req, res) => {
	if (req.method === 'POST') {
		let data = await Promo.create({
			"code": req.body.code,
			"count": req.body.count,
		});
		console.log("Promo created")
		res.status(200).json(data)
	} else {
		res.status(400).json({message: "Method not allowed"})
	}
    
};

export default connectDB(createPromo);