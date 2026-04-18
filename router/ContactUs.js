// routes/contact.js
const express = require("express");
const router = express.Router();
const sequelize = require("../Connection/db");
const { Sequelize } = require("sequelize");
const nodemailer = require('nodemailer');
const contactEmailTemplate = require("../emailTemplate");
const Contact = require("../models/Contactus")(sequelize, Sequelize.DataTypes);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EmailUser,
        pass: process.env.Emailpass
    }
});


router.post("/contact", async (req, res) => {
    try {
        const { name, phone, message } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ message: "Name and phone required" });
        }

        const data = await Contact.create({
            name,
            phone,
            message,
        });


        try {
            const emailHtml = contactEmailTemplate(name, phone, message);
            // console.log(emailHtml)
            // console.log('Email HTML content:', emailHtml.substring(0, 200) + '...'); // Log first 200 chars

            const mailOptions = {
                from: "raidivyansh86@gmail.com",
                to: "raidivyansh878@gmail.com",
                subject: "New Contact Form Submission",
                html: emailHtml,
            };

            const info = await transporter.sendMail(mailOptions);

        } catch (error) {
            console.error(" Email error:", error);
        }

        res.status(201).json({
            message: "Form submitted successfully",
            data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;