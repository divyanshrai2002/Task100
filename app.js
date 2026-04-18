require('dotenv').config();

const express = require("express");
const app = express();

const sequelize = require("./Connection/db");

app.use(express.json());

const contactRoutes = require("./router/ContactUs");
app.use("/api", contactRoutes);

const socialRoutes = require("./router/SocialRoutes");
app.use("/api", socialRoutes);

sequelize
    .sync() 
    .then(() => {
        console.log("✅ DB Connected & Tables Synced");

        app.listen(3000, () => {
            console.log("🚀 Server running on port 3000");
        });
    })
    .catch((err) => {
        console.log("❌ Error:", err);
    });