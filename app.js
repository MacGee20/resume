const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
// const { verify } = require('crypto');
require("dotenv").config;



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.use(express.static(__dirname+ '/public'));
app.use('/', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

console.log(`Running on port ${PORT}...`);
});


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  }
});



app.post('/send', (req, res) => {
  
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    })
    
    
const mail = {
  from: data.name,
  to: process.env.EMAIL ,
  subject: data.subject,
  text: `${data.name} <${data.email}> \n${data.message}`,
  }

  transporter.sendMail(mail, (error, data) => {  
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong")
     } else {
      res.status(200).send("Email succesfully sent");
    }
  });
})
})