const { Sequelize } = require("sequelize");

// const config = require("./config");

const infraManager = (config) => {
  const initDb = () => {
    const { dbHost, dbPort, dbUser, dbPassword, dbName, dbDriver } = config();
    const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

    console.log(connectionString);
    return new Sequelize(connectionString);
  };
  return { initDb };
};

module.exports = infraManager;
