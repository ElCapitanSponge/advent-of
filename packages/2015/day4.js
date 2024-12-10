import * as crypto from "crypto";

/**
 * @param {string} input
 * @returns number
 */
const Day4Part1 = (input) => {
	/** @type {number} */
	let counter = 0;
	/** @type {string} */
	let hash = "";
	while (hash.substring(0, 5) !== "00000") {
		counter++;
		hash = crypto.createHash("md5")
			.update(input + counter)
			.digest("hex");
	}
	return counter;
}

export { Day4Part1 };
