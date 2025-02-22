#!/usr/bin/env node
import { Command, Argument } from "commander";
import semver from "semver";
import chalk from "chalk";
import Init from "./class/init.class.js";

const program = new Command();

if (!semver.satisfies(process.version, ">= 15.0.0")) {
	console.error(chalk.red("✘ The generator will only work with Node v8.0.0 and up!"));
	process.exit(1);
}

program
	.name("cli-commander")
	.description("Project express generator with services, controllers, models using sequelize")
	.version("0.0.1")
	.argument("<name>", "Nombre del proyecto")
	.option("-f, --force", "Force overwrite folder")
	.description("Inicia el nombre del proyecto: default: *aleatorio*")
	.action(Init.run);

program.parse(process.argv);
