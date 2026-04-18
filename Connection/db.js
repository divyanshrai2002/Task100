// config/database.js
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
    process.env.dbName,   // DB name
    process.env.dbUser,        // DB user
    process.env.dbPassword,        // DB password
    {
        host: "localhost",
        dialect: "mysql", // or 'postgres'
        logging: false,
    }
);

module.exports = sequelize;