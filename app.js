//importing The nodemailer from Packages
var nodemailer = require("nodemailer");

/* Make  Variable Name Transport And Use Inbuild Function of Nodemailer :-createTransport() and set Default SMTP(Simple Mail Transfer Protocol) Transport */
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "chetuanmol0801@gmail.com", //your Mail for Authentication
    pass: "anmols1234", //And Your Password
  },
});

var mailOptions = {
  from: "chetuanmol0801@gmail.com", //which email you sent From
  to: "chetuanmol0801@gmail.com", //Where you Want Send A Email
  subject: "What You Want Add in Subject", //Add A Subject Of your Email
  text: "What Message You Want to Send ", // Add Body of Your Email
};

/* Use the Inbuild Function Of transporter :-sendMail 
which Accpet two  parameters  First one is mailOpitons Which Your declear Above and Second is CallBack Function  In callback we Again Pass Two Parameters one is ERROR and Information , infromation  Contions Multiple Things Like envelope ,MessageId, messageTime and response  */

transporter.sendMail(mailOptions, (error, information) => {
  //we are checking the value if error occurs its show error otherwise it shows else part in which email is been sent
  if (error) {
    console.log(error);
  } else {
    console.log("Email Has Been Sent", information.response);
  }
});
