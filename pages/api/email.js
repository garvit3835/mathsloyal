const nodemailer = require("nodemailer");

async function handler(req, res) {
    if (req.method === 'GET') {
        let OTP = Math.floor(100000 + Math.random() * 900000)
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "mathsloyalpvt.ltd@gmail.com",
                pass: process.env.GENERATED_PASS,
            },
        });
    
        let mailDetails = {
            from: "mathsloyalpvt.ltd@gmail.com",
            to: "garvit3835@gmail.com",
            subject: "Mathsloyal - Email verification",
            text: `The One-time password for email verification is ${OTP}`,
        };
    
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                res.status(400).json({ error: err });     
            } else {
                // console.log("Email sent successfully");
                res.status(200).json({data: OTP})
            }
        });
    } else {
        res.send("wrong method")
    }
	
}

export default handler;
