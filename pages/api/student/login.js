import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        let user = await Student.findOne({ email: req.body.email });
        console.log(user)
        if (user) {
            // res.status(200).json({ success: true, message: 'User exists' });
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRECT_KEY);
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (req.body.email === user.email && req.body.password === decryptedPassword) {
                let token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2d' });
                res.status(200).json({ success: true, token, user});
                // console.log(user);
            }
            else {
                res.status(200).json({ success: false, error: 'Invalid credentials' });
            }
        }
        else {
            res.status(400).json({ success: false, error: 'Invalid credentials' });
        }
    }
    else {
        res.status(400).json({ success: false, error: 'This Method Is not allowed' });
    }
}
export default connectDB(handler);
