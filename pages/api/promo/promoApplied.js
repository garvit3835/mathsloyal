import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import Promo from "../../../model/promo";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const promoApplied = async (req, res) => {
    if (req.method === 'POST') {
        const info = await Promo.findOne({ code: req.body.code, count: { $gt: 0 } })
        if (info) {
            const data = await Student.updateOne(
                { _id: mongoose.Types.ObjectId(req.body.studentId) },
                {promo: req.body.code}
            )
            --info.count;
            await info.save()
            res.status(200).json(data)
        } else {
            res.status(400).json({error: "Promo Code expired or invalid"})
        }
        
    } else {
        res.status(400).json({ message: 'Method Is not allowed' });
    }
    
};

export default connectDB(promoApplied);