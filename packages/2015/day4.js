import * as crypto from "crypto"

/**
 * @param {string} hashKey
 * @param {number} numZeros
 * @returns number
 */
const Day4Part1And2 = (hashKey, numZeros) => {
	/** @type {number} */
	let counter = 0
	/** @type {string} */
	let hash = ""
	/** @type {string} */
	const zeroString = "0".repeat(numZeros)

	while (hash.substring(0, numZeros) !== zeroString) {
		counter++
		hash = crypto.createHash("md5")
			.update(hashKey + counter)
			.digest("hex")
	}
	return counter
}

export { Day4Part1And2 }
