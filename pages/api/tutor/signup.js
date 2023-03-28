import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        const { name, email } = req.body;
        // res.status(200).json({ req: req.body });
        let user = await Tutor.findOne({ email: email });
        if (user) {
            res.status(400).json({ success: false, message: 'User already exists' });
        }
        else {
            // res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
            // let u = new Tutor({ name, email, password: req.body.password });
            let u = new Tutor({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRECT_KEY).toString() });
            await u.save();
            // res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
            res.status(200).json({ success: true, message: 'Account Created successfully Now you can login', u });
         }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);