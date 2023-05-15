const express = require("express");
const expressAsyncHandler = require("express-async-handler")
const router = new express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });
const sendEmail = expressAsyncHandler(async (req,res)=>{
    try{
    const {email, subject, message} = req.body;
    console.log(req.body);
    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to:email,
        subject:subject,
        html:message
    }
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log("Email sent successfully");
            res.status(201).json({status:201,info})
        }
    })
}
catch(error){
    res.status(201).json({status:401,error})
}
})
router.post("/email/sendEmail",sendEmail)

module.exports = {sendEmail};