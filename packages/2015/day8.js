/**
 * @param {string[]} lines
 * @returns {number}
 */
const Day8Part1 = (lines) => {
	/** @type {number} */
	let total = 0
	lines.forEach(line => {
		total += line.length - eval(line).length
	})
	return total
}

/**
 * @param {string[]} lines
 * @returns {number}
 */
const Day8Part2 = (lines) => {
	/** @type {number} */
	let total = 0
	lines.forEach(line => {
		total += JSON.stringify(line).length - line.length
	})
	return total
}

export { Day8Part1, Day8Part2 }
