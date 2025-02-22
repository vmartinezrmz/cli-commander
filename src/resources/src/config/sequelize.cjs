// TODO: utilice database file for sequelize migrations

require("dotenv").config();

// NOTE: NOTE
module.exports = {
	// NOTE: Change for use mysql / postgres or supported database on sequelize
	// development: {
	// 	username: process.env.DB_USER,
	// 	password: process.env.DB_PASSWORD,
	// 	database: process.env.DB_NAME,
	// 	host: process.env.DB_HOST,
	// 	port: process.env.DB_PORT,
	// 	dialect: "mysql",
	// 	dialectOptions: {
	// 		bigNumberStrings: true,
	// 	},
	// },
	// production: {
	// 	username: process.env.DB_USER,
	// 	password: process.env.DB_PASSWORD,
	// 	database: process.env.DB_NAME,
	// 	host: process.env.DB_HOST,
	// 	port: process.env.DB_PORT,
	// 	dialect: "mysql",
	// 	dialectOptions: {
	// 		bigNumberStrings: true,
	// 	},
	// },

	// NOTE: Default: sqlite on tmp dir
	development: {
		storage: "./tmp/sequelize.sqlite",
		dialect: "sqlite",
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	production: {
		storage: "./tmp/sequelize.sqlite",
		dialect: "sqlite",
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
};
