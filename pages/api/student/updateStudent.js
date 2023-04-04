import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

const updateStudent = async (req, res) => {

    if (req.method === "POST") {
        const {studentId, name, city, phone, board, target, classs } = req.body
        let result = await Student.findById(studentId)
        if(result){
        await Student.findOneAndUpdate(
            {
               _id: mongoose.Types.ObjectId(studentId)
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
          await  Student.findById(studentId,{password: 0, })
        )
        }else{
            res.status(200).json({error: "not found"});
        }
        
    }  else {
        res.status(400).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(updateStudent);