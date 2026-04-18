// routes/socialRoutes.js
const express = require("express");
const router = express.Router();
const sequelize = require("../Connection/db");
const { Sequelize } = require("sequelize");

const SocialLink = require("../models/SocialLinks")(sequelize, Sequelize.DataTypes);

router.get("/social-links", async (req, res) => {
  try {
    const links = await SocialLink.findAll();
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: "Error fetching links" });
  }
});

module.exports = router;