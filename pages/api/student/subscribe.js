import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";
// const ObjectId = mongoose.Schema.ObjectId;

const subscribe = async (req, res) => {
    if (req.method === 'POST') {
        let data = await Student.findByIdAndUpdate(
            req.body.studentId,
            {
                subDate: new Date(),
                queCount: 40
            },
            {new: true}
        )
        res.status(200).json(data)
    } else {
        res.status(400).json({error: "Wrong Method!"})
    }
   
};

export default connectDB(subscribe);