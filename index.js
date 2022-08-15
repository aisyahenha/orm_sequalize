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
  //   const customer3 = await Customer.create({
  //     name: "Lady Bug",
  //     address: "wonderland",
  //     phone: "08123121234",
  //     email: "abc@12324.com",
  //     balance: 10,
  //   });

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

  console.log(users.dataValues);
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
