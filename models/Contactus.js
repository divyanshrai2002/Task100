// models/contact.js
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        "Contact",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            message: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "contacts",
            timestamps: true,
        }
    );

    return Contact;
};