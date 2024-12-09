import * as fs from "fs";

/**
 * @summary Read file from the given path
 * @param {string} path - Path of the file
 * @returns {string[]} - Array of lines in the file
 */
function ReadFile(path) {
	if (!fs.existsSync(path)) {
		throw new Error(`File not found: ${path}`);
	}

	/** @type {string[]} */
	let lines = [];

	lines = fs.readFileSync(path, "utf-8").split("\n");

	if (lines[lines.length - 1] === "") {
		lines.pop();
	}

	return lines;
}

export { ReadFile };
