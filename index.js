// const db = require("./src/config/db")
const dbMigration = require("./src/config/db.migration");
const customer = require("./src/model/model.customers");

const run = async () => {
  await dbMigration();
  await customer().finaAll();

  //  const addCustomer = await  customer().create({
  //       name: "John Doe",
  //       address: "Lost City",
  //       phone: "0812312123",
  //       email: "abc@1234.co.as",
  //       balance: 10,
  //  });
};
run();
