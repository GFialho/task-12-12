const Sequelize = require("sequelize");

const options = {
  dialect: "postgres",
  // logging: process.env.IS_LOCAL ? console.log : null,
  logging: null,
  host: "localhost",
  pool: {
    // maximum number of connection in pool. default is 5
    max: 75,
    // minimum number of connection in pool
    min: 0,
    // The maximum time, in milliseconds, that a connection can be idle before being released
    idle: 1000,
    acquire: 440000,
  },
};

const sequelize = new Sequelize("postgres", "user", "123", options);
const Albumn = require("./Albumn")(sequelize, Sequelize);

const models = {
  Albumn,
};

Object.keys(models).forEach((key) => {
  if (models[key] && models[key].associate) {
    models[key].associate(models);
  }
});

module.exports = models;
