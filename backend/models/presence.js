const {Model, DataTypes} = require('sequelize');
const sequelize = require("../db.config");
class Presence extends Model {}

Presence.init({
    users_nip: {
        type: DataTypes.INTEGER,
    },
    status:{
        type: DataTypes.ENUM("in", "out")
    }
}, {
    sequelize,
    modelName: "Presence"
});

module.exports = Presence;