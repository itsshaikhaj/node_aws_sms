const express = require('express');
const router = express.Router();
const { sendOTP } = require('../services/sms');

// send OTP
router.post('/sendOTP', async (req, res) => {
    try {
        const { phone } = req.body;
        const OTP = Math.floor(1000 + Math.random() * 9000);
        const message = `Thanks for registering with us, your OTP is ${OTP}
        `;
        const result = await sendOTP(phone, message);
        res.json({
            success: true,
            message: 'OTP sent successfully',
            result
        });
    } catch (err) {
        res.json({
            success: false,
            message: 'Error occured while sending OTP',
            error: err.stack
        });
    }
});

module.exports = router;
