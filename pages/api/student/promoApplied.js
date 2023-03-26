import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const promoApplied = async (req, res) => {
    if (req.method === 'POST') {
        const data = await Student.updateOne(
            { _id: mongoose.Types.ObjectId(req.body.studentId) },
            {promo: req.body.promo}
        )
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'Method Is not allowed' });
    }
    
};

export default connectDB(promoApplied);