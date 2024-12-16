/**
 * @param {number} value
 * @returns {number} masked 16 bit
 */
const Mask16Bit = (value) => value & 0xFFFF

/**
 * @param {string} line
 * @returns {BitwiseOperation}
 */
const GetLineCommand = (line) => {
	if (line.includes("AND")) {
		return "AND"
	}
	if (line.includes("OR")) {
		return "OR"
	}
	if (line.includes("LSHIFT")) {
		return "LSHIFT"
	}
	if (line.includes("RSHIFT")) {
		return "RSHIFT"
	}
	if (line.includes("NOT")) {
		return "NOT"
	}
	return "ASSIGN"
}

/**
 * @param {Wire[]} wires
 * @param {string[]} lines
 * @returns {Wire[]}
 */
const PopulateWires = (wires, lines) => {
	lines.forEach((line, idx) => {
		/** @type {string} */
		const tmpLine = line.trim()
		if (!wires.some(w => w.name === tmpLine.split(" -> ")[1])) {
			let name = tmpLine.split(" -> ")[1]
			wires.push({
				name: name,
				value: undefined,
				allocation: tmpLine,
				allocationLine: idx
			})
		}
	})
	return wires
}

/**
 * @param {string} allocationLine
 * @returns {string[]}
 */
const GetValues = (allocationLine) => {
	/** @type {string[]} */
	const valuesInitial = allocationLine.split(" -> ")[0].split(" ")
	return valuesInitial.filter(v =>
		v !== "AND" &&
		v !== "OR" &&
		v !== "LSHIFT" &&
		v !== "RSHIFT" &&
		v !== "NOT"
	)
}

/**
 * @param {number[]} values
 * @param {BitwiseOperation} command
 * @returns {number?}
 */
const GetResult = (values, command) => {
	switch (command) {
		case "AND":
			return values[0] & values[1]
		case "OR":
			return values[0] | values[1]
		case "LSHIFT":
			return values[0] << values[1]
		case "RSHIFT":
			return values[0] >> values[1]
		case "NOT":
			return ~values[0]
		case "ASSIGN":
			return values[0]
		default:
			return undefined
	}
}

/**
 * @param {Wire[]} wires
 * @param {string} wireName
 * @returns {number?}
 */
const GetWireValue = (wires, wireName) => {
	/** @type {string[]} */
	const valuesList = GetValues(wires.find(w => w.name === wireName).allocation)
	/** @type {number[]} */
	const valuesProper = []
	valuesList.forEach(v => {
		if (isNaN(parseInt(v))) {
			if (wires.some(w => w.name === v)) {
				/** @type {Wire} */
				const wire = wires.find(w => w.name === v)
				if (wire.value !== undefined) {
					valuesProper.push(wire.value)
				} else {
					valuesProper.push(undefined)
				}
			}
		} else {
			valuesProper.push(Mask16Bit(parseInt(v)))
		}
	})

	if (valuesProper.some(v => v === undefined)) {
		return undefined
	}

	/** @type {BitwiseOperation} */
	const command = GetLineCommand(wires.find(w => w.name === wireName).allocation)
	/** @type {number} */
	return Mask16Bit(GetResult(valuesProper, command))
}

/**
 * @param {string[]} lines
 * @returns {Wire[]}
 */
const ParseWires = (lines) => {
	/** @type {Wire[]} */
	let wires = PopulateWires([], lines)

	let containsUndefined = wires.some(w => w.value === undefined)

	while (containsUndefined) {
		wires.forEach(w => {
			if (w.value === undefined) {
				w.value = GetWireValue(wires, w.name)
			}
		})
		containsUndefined = wires.some(w => w.value === undefined)
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
	return wire?.value ?? -1
}

export { Day7Part1 }

