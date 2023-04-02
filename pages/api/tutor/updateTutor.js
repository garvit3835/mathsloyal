import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

const updateTutor = async (req, res) => {

    if (req.method === "POST") {
        const {tutorId, name, password, city, phone, board, target, subscription} = req.body

        let result = await Tutor.findById(tutorId)
        name ? result.name = name : result.name
        password ? result.password = password : result.password
        city ? result.city = city : result.city
        req.body.class ? result.class = req.body.class : result.class
        phone ? result.phone = phone : result.phone
        board ? result.board = board : result.board
        target ? result.target = target : result.target
        subscription ? result.subscription = subscription : result.subscription
        await result.save()
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(200).json({error: "not found"});
        }
        

    } else {
        res.status(400).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(updateTutor);