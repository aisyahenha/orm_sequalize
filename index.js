const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  `postgresql://postgres:kosongin@localhost:5432/db_enigmamart`
);

// define model
const migration = async () => {
  const Customer = sequelize.define(
    "mst_customer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      balance: DataTypes.INTEGER,
      isStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      paranoid: true, //akan berpengeruh pada delete soft
    }
  );
  await Customer.sync({ alter: true });

  //crud basic
  //   const customer2 = await Customer.create({
  //     name: "Mario Bros",
  //     address: "Lost City",
  //     phone: "0812312123",
  //     email: "abc@1234.com",
  //     balance: 10,
  //   });
  // const customer3 = await Customer.create({
  //   name: "Lady Ant",
  //   address: "wonderland Kw",
  //   phone: "08123121234",
  //   email: "abcd@12324.com",
  //   balance: 10,
  // });

  //select  * from

  // const users = await Customer.findAll();
  //   const users = await Customer.findAll({
  //     where: { name: "Mario Bros" },
  //   });
  //   const users = await Customer.findAll({
  //     order: [["created_at", "desc"]]
  //   });

  //find one || by id
  //   const users = await Customer.findOne({
  //     where : {name: 'Mario Bros'}
  //   })
  // const users = await Customer.findByPk('254c0133-152f-42f7-bb10-26dff3a79075')

  // find count all berhubungan dengan pagination
  /*
// Fetch 10 instances/rows
    Project.findAll({ limit: 10 });

    // Skip 8 instances/rows
    Project.findAll({ offset: 8 });

    // Skip 5 instances and fetch the 5 after that
    Project.findAll({ offset: 5, limit: 5 });

  */
  //delete
  //  const deleteCus= await Customer.destroy({
  //   where :{ id: 'cd31b219-9cb9-4075-aeca-53f1345cc2fd'}
  //  })

  //delete soft
  //  const deleteCus= await Customer.destroy({
  //   where :{ id: '6b60e0c7-91f0-4fe4-9eae-9caed05ae432'}
  //  })

  //update
  const updateCustomer = await Customer.update(
    {
      name: "John Doe",
    },
    {
      where: { id: "2ca4e104-ef81-4aa5-9df6-2617c3b264ca" },
    }
  );
  console.log(updateCustomer);
};
migration();

/*const conn = async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
conn();
*/
