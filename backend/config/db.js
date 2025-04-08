import {Sequelize} from "sequelize";

const sequelize = new Sequelize("expense_tracker", "root", "admin@123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export { dbConnect, sequelize };
