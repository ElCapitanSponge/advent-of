/**
 * @param {string[]} lines
 * @returns number
 */
function Day2Part1(lines) {
	/** @type {number} */
	let total = 0

	for (const line of lines) {
		/** @type {number[]} */
		const [l, w, h] = line.split("x").map(Number)
		const smallest = Math.min(l*w, w*h, h*l)
		/** @type {number} */
		total += 2*l*w + 2*w*h + 2*h*l + smallest
	}

	return total
}

export { Day2Part1 }
