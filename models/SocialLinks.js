module.exports = (sequelize, DataTypes) => {
    return sequelize.define("SocialLink", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true // 👈 IMPORTANT
    });
};