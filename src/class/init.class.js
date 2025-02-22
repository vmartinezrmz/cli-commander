import chalk from "chalk";
import path from "path";
import fs from "fs";
import Main from "./main.class.js";
import { fileURLToPath } from "url";

class Init extends Main {
	static async run(name, options) {
		const CURRENT_DIRECTORY = super.currentDirectory();
		const ROOT_DIR = path.join(process.cwd(), name);
		const RESOURCE_DIR = path.join(CURRENT_DIRECTORY, "../resources");

		if (super.checkDirectory(ROOT_DIR, options?.force)) {
			await super.confirmOverwrite(ROOT_DIR);
		}

		console.log(chalk.blueBright(`Inicializando proyecto en el directorio: ${ROOT_DIR}`));

		fs.cpSync(RESOURCE_DIR, ROOT_DIR, { recursive: true });
	}
}

export default Init;
