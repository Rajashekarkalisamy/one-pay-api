const model = require('../models/index');
const Responser = require("../response/index");
const pug = require('pug');

const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let response;
  // 1) Create a Transporter
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: 'onepayapi01@gmail.com',
        pass: 'plig szba mkxd zcpz',
      },
    });

    const mailOptions = {
      from: 'onepayapi@gmail.com',
      to: req.to,
      subject: req.subject,
      html: req.html,
    };
    response = await transporter.sendMail(mailOptions);
  } catch {
    response = false;
  }
  return response;
};

const forgotPasswordMail = async (req, res) => {
  let response;
  let template = 'views/index.pug'; 
  // 1) Create a Transporter
  try {
      //mail input with template
      const mailData = {
        to: req.body.email,
        subject: 'One pay forgot password',
        html: pug.renderFile('views/forgotPasswordMail.pug', { link: 'http://localhost:3000/users/verifyemail/' + req.body.email_token }),
      };
      const info = await sendEmail(mailData);
      if(info){
        response = true
      } else {
        response = false;
      }
    // }
  } catch (error) {
    response = false;
  }
  return response;
};

module.exports = {
  sendEmail: sendEmail,
  forgotPasswordMail: forgotPasswordMail,
};
