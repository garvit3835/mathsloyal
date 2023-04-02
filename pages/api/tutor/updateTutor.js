import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

const updateTutor = async (req, res) => {

    if (req.method === "POST") {
        const {tutorId, name, city, phone, board, target, classs } = req.body
        let result = await Tutor.findById(tutorId)
        if(result){
        await Tutor.findOneAndUpdate(
            {
               _id: tutorId
            },
            {
                name: name ? name : result.name,
                city: city ? city : result.city,
                phone: phone ? phone : result.phone,
                board: board ? board : result.board,
                target: target ? target : result.target,
                class: classs ? classs:result.class
            }
        )
      
        res.status(200).json(
          await  Tutor.findById(tutorId,{password: 0, })
        )
        }else{
            res.status(200).json({error: "not found"});
        }
        
    } else {
        res.status(400).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(updateTutor);