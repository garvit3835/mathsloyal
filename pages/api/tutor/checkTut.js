import jsonwebtoken from 'jsonwebtoken';
import Tutor from "../../../model/Tutor";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {

    if (req.method === "POST") {
        let token = req.body.token;

        const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const dbuser = await Tutor.findOne({ email: user.email }, { password: 0, __v: 0 });
        // if (dbuser) {
        //     res.status(200).json({ success: true, user: dbuser });
        //     return;
        // }

        res.status(200).json({ success: true, user: dbuser });

    } else {
        res.status(200).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(handler);
