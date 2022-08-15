const Customer = require("../model/model.customers");
const CustomerReository = (db) => {
  const create = async (payload) => {
    try {
      return await Customer(db).create(payload);
    } catch (error) {
      return error.message;
    }
  };
  const list = async (payload) => {
    try {
      return await Customer(db).findAll(payload);
    } catch (error) {
      return error.message;
    }
  };
  return {create, list}

};
module.exports = CustomerReository