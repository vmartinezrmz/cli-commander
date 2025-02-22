import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// NOTE: Change for use mysql / postgres or supported database on sequelize
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
// 	host: process.env.DB_HOST,
// 	port: process.env.DB_PORT,
// 	dialect: "mysql",
// 	dialectOptions: {
// 		bigNumberStrings: true,
// 	},
// });

// NOTE: Default: sqlite on tmp dir
const sequelize = new Sequelize({
	storage: "./tmp/sequelize.sqlite",
	dialect: "sqlite",
	dialectOptions: {
		bigNumberStrings: true,
	},
});

export default sequelize;
