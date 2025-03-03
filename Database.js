import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("note", "root", "", {
  host: "",
  dialect: "mysql",
});

export default db;
