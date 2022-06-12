const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
const sms = require('./routes/smsRoute');

const PORT = '3000';
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use('/api', sms );

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));