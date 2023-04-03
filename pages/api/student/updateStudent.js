import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
import mongoose from "mongoose";

const updateStudent = async (req, res) => {

    if (req.method === "POST") {
        const { studentId, name, password, city, phone, school, target, subscription, board } = req.body
        let result = await Student.findById(studentId)

        if (result) {
            name ? result.name = name : result.name
            password ? result.password = password : result.password
            city ? result.city = city : result.city
            req.body.class ? result.class = req.body.class : result.class
            phone ? result.phone = phone : result.phone
            school ? result.school = school : result.school
            target ? result.target = target : result.target
            board ? result.board = board : result.board
            subscription ? result.subscription = subscription : result.subscription
            await result.save()
            res.status(200).json(result);
        } else {
            res.status(200).json({ error: "not found" });
        }


    } else {
        res.status(400).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(updateStudent);