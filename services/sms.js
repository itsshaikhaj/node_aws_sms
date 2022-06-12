const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

 //send OTP using AWS-SNS
 function sendOTP(phone, message){
  // CountryCode is must to receive SMS 
 console.log('phone :', phone);
 console.log('message :', message);
    var mobileNo = phone;
    var OTP = Math.floor(1000 + Math.random() * 9000);
    
    var params = {
    Message: message,
    PhoneNumber: phone,
      };
      return new AWS.SNS({apiVersion: '2010–03–31'}).publish(params).promise()
    }

 module.exports = {
    sendOTP
  }