/**
 * @param {string} jsonString
 * @returns {number} Sum of all numbers in the JSON object
 */
const Day12Part1 = (jsonString) => {
	/** @type {number} */
	let sum = 0

	/** @type {any} */
	const json = JSON.parse(jsonString)

	/**
	 * @param {any} obj
	 */
	const sumObject = (obj) => {
		if (typeof obj === "number") {
			sum += obj
		} else if (Array.isArray(obj)) {
			obj.forEach(sumObject)
		} else if (typeof obj === "object") {
			Object.values(obj).forEach(sumObject)
		}
	}

	sumObject(json)

	return sum
}

/**
 * @param {string} jsonString
 * @returns {number} Sum of all numbers in the JSON object without objects that contain "red" as a value
 */
const Day12Part2 = (jsonString) => {
	/** @type {number} */
	let sum = 0

	/** @type {any} */
	const json = JSON.parse(jsonString)

	/**
	 * @param {any} obj
	 */
	const sumObject = (obj) => {
		if (typeof obj === "number") {
			sum += obj
		} else if (Array.isArray(obj)) {
			obj.forEach(sumObject)
		} else if (typeof obj === "object") {
			if (!Object.values(obj).includes("red")) {
				Object.values(obj).forEach(sumObject)
			}
		}
	}

	sumObject(json)

	return sum
}

export { Day12Part1, Day12Part2 }
