/**
 * @param {string[]} lines
 * @returns number
 */
const Day2Part1 = (lines) => {
	/** @type {number} */
	let total = 0;

	for (const line of lines) {
		/** @type {number[]} */
		const [l, w, h] = line.split("x").map(Number);
		/** @type {number} */
		const smallest = Math.min(l * w, w * h, h * l);
		total += 2 * l * w + 2 * w * h + 2 * h * l + smallest;
	}

	return total;
}

/**
 * An array with two numbers
 * @type {number[]}
 * @typedef {number[]} TwoSmallestSides
 * @property {number} 0 The smallest side
 * @property {number} 1 The next smallest side
 */

/**
 * @param {string[]} lines
 * @returns number
 */
const Day2Part2 = (lines) => {
	/** @type {number} */
	let ribbon = 0;

	for (const line of lines) {
		/** @type {number[]} */
		const [l, w, h] = line.split("x").map(Number);
		/** @type {TwoSmallestSides} */
		const smallest = TwoSmallest(l, w, h)
		ribbon += (smallest[0]*2 + smallest[1]*2) + (l*w*h)
	}

	return ribbon;
}

/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @returns TwoSmallestSides
 */
const TwoSmallest = (length, width, height) => {
	/** @type {TwoSmallestSides} */
	let values = new Array(2).fill(null)

	/** @type{number[]} */
	const numberList = [length, width, height].sort((a,b) => a - b)

	values = [numberList[0], numberList[1]]

	return values
}

export { Day2Part1, Day2Part2 };
