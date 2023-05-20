const { Sequelize } = require("sequelize");
const database = "db_absensi";
const host = "localhost"
const user = "root";
const password = "";
const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    host: host
});

module.exports = sequelize;
