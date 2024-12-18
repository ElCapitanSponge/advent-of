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

export { Day8Part1 }
