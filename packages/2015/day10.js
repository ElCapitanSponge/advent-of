/**
 * @param {string} numberLine
 * @returns {string}
 */
const LookAndSay = (numberLine) => {
/** @type {string} */
	let result = ""
	/** @type {string[][]} */
	const groups = []
	/** @type {string[]} */
	const chars = numberLine.split("")
	/** @type {string[]} */
	let currentGroup = []
	/** @type {string} */
	let currentChar = chars[0]

	chars.forEach(char => {
		if (char === currentChar) {
			currentGroup.push(char)
		} else {
			groups.push(currentGroup)
			currentGroup = []
			currentGroup.push(char)
			currentChar = char
		}
	})
	if (currentGroup.length > 0) {
		groups.push(currentGroup)
	}

	groups.forEach(group => {
		result += `${group.length}${group[0]}`
	})

	return result

}

/**
 * @param {string} numberLine
 * @param {number} iterations
 * @returns {string}
 */
const Day10 = (numberLine, iterations) => {
	/** @type {string} */
	let result = ""

	for (let i = 0; i < iterations; i++) {
		result = LookAndSay(numberLine)
		numberLine = result
	}

	return result
}

export { Day10 }
