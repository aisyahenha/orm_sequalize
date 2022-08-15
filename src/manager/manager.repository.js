const CustomerReository = require("../repository/customer.repository");
// const infraManager = require("../infra.manager/config.manager");

module.exports = (infraManager) => {
  const { initDb } = infraManager();
  const db = initDb();

  const customerReository = () => {
    CustomerReository(db)
return  {customerReository}
  };
};
