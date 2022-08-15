const modelCustomer = require("../model/model.customers");

const dbMigration = async () => {
  await modelCustomer().sync();
};

module.exports = dbMigration;
