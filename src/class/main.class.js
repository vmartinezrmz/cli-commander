import chalk from "chalk";
import fs from "fs";
import path from "path";
import prompts from "prompts";
import { fileURLToPath } from "url";

class Main {
	static currentDirectory() {
		return path.dirname(fileURLToPath(import.meta.url));
	}

	static checkDirectory(dir, force) {
		if (!fs.existsSync(dir)) return false;

		console.log(chalk.yellow(`⚠ El directorio ya existe: ${dir}`));

		if (!force) process.exit(1);

		return true;
	}

	static createFile = (dir, content) => {
		if (!fs.existsSync(dir)) {
			fs.outputFileSync(dir, content);
			console.log(chalk.green(`✔ Archivo creado: ${dir}`));
		} else {
			console.log(chalk.yellow(`⚠ El archivo ya existe: ${dir}`));
		}
	};

	static async confirmOverwrite(dir) {
		const { overwrite } = await prompts({
			type: "confirm",
			name: "overwrite",
			message: `El directorio ya existe: ${dir} - ¿Sobreescribir?`,
			initial: false,
		});

		if (!overwrite) {
			console.log(chalk.redBright(`⚠ No se ha modificado el directorio: ${dir}`));
			process.exit(1);
		}
	}
}

export default Main;
