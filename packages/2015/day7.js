/**
 * @param {number} value
 * @returns {number} masked 16 bit
 */
const Mask16Bit = (value) => value & 0xFFFF

/**
 * @param {string} line
 * @returns {string}
 */
const getCommand = (line) => {
	if (line.includes("AND")) {
		return "AND"
	} else if (line.includes("OR")) {
		return "OR"
	} else if (line.includes("LSHIFT")) {
		return "LSHIFT"
	} else if (line.includes("RSHIFT")) {
		return "RSHIFT"
	} else if (line.includes("NOT")) {
		return "NOT"
	} else {
		return "ASSIGN"
	}
}

/**
 * @param {string} line
 * @returns {string}
 */
const getWireName = (line) => line.split(" -> ")[1].replace("\r", "")

/**
 * @param {string} line
 * @param {string} command
 * @returns {string[]}
 */
const getValues = (line, command) => {
	if (command === "ASSIGN") {
		return [line.split(" -> ")[0]]
	} else if (command === "NOT") {
		return [line.split(" -> ")[0].split(" ")[1]]
	} else {
		return line.split(" -> ")[0]
			.split(" ")
			.filter(v => v !== "AND" && v !== "OR" && v !== "LSHIFT" && v !== "RSHIFT")
	}
}

/**
 * @typedef {Object} Wire
 * @property {string} name
 * @property {number} value
 */

/**
 * @typedef {Object} ProcessResult
 * @property {Wire[]} wires
 * @property {string[]} missingLines
 */


/**
 * @param {string} command
 * @param {string[]} values
 * @param {Wire[]} wires
 * @returns {number | undefined}
 */
const getResult = (command, values, wires) => {
	if (command === "ASSIGN") {
		/** @type {number} */
		if (isNaN(Number(values[0]))) {
			/** @type {number | undefined} */
			const value = wires.find(w => w.name === values[0])?.value
			console.log(values[0])
			console.log(wires.find(w => w.name === values[0]))
			console.log(value)
			return value
		}
		return Number(values[0])
	} else if (command === "NOT") {
		/** @type {number | undefined} */
		const value = wires.find(w => w.name === values[0])?.value
		if (value === undefined) {
			return undefined
		}
		return ~value
	} else if (command === "AND") {
		/** @type {number | undefined} */
		const value1 = wires.find(w => w.name === values[0])?.value
		if (value1 === undefined) {
			return undefined
		}
		/** @type {number | undefined} */
		const value2 = wires.find(w => w.name === values[1])?.value
		if (value2 === undefined) {
			return undefined
		}
		return value1 & value2
	} else if (command === "OR") {
		/** @type {number | undefined} */
		const value1 = wires.find(w => w.name === values[0])?.value
		if (value1 === undefined) {
			return undefined
		}
		/** @type {number | undefined} */
		const value2 = wires.find(w => w.name === values[1])?.value
		if (value2 === undefined) {
			return undefined
		}
		return value1 | value2
	} else if (command === "LSHIFT") {
		/** @type {number | undefined} */
		const value1 = wires.find(w => w.name === values[0])?.value
		if (value1 === undefined) {
			return undefined
		}
		/** @type {number} */
		const value2 = Number(values[1])
		return value1 << value2
	} else if (command === "RSHIFT") {
		/** @type {number | undefined} */
		const value1 = wires.find(w => w.name === values[0])?.value
		if (value1 === undefined) {
			return undefined
		}
		/** @type {number} */
		const value2 = Number(values[1])
		return value1 >> value2
	}
}

/**
 * @param {Wire[]} wires
 * @param {string[]} lines
 * @returns {ProcessResult}
 */
const process = (wires, lines) => {
	const missingLines = []

	for (const line of lines) {
		/** @type {string} */
		const command = getCommand(line)
		/** @type {string} */
		const wireName = getWireName(line)
		/** @type {string[]} */
		const values = getValues(line, command)
		/** @type {number | undefined} */
		const result = getResult(command, values, wires)
		console.log(result)
		if (result === undefined) {
			missingLines.push(line)
		} else {
			if (wires.find(w => w.name === wireName)) {
				wires.find(w => w.name === wireName).value = Mask16Bit(result)
			} else {
				wires.push({
					name: wireName,
					value: Mask16Bit(result)
				})
			}
		}
	}

	return { wires, missingLines }
}

/**
 * @param {string[]} lines
 * @returns {Wire[]}
 */
const ParseWires = (lines) => {
	/** @type {Wire[]} */
	let wires = []

	while (lines.length > 0) {
		/** @type {ProcessResult} */
		const result = process(wires, lines)
		console.log(result)
		wires = result.wires
		lines = result.missingLines
	}

	return wires
}

/**
 * @param {string[]} lines
 * @param {string} wireName
 * @returns {number}
 */
const Day7Part1 = (lines, wireName) => {
	/** @type {Wire[]} */
	const wires = ParseWires(lines)
	/** @type {Wire} */
	const wire = wires.find(w => w.name === wireName)
	return wire?.value ?? 0
}

export { Day7Part1 }

