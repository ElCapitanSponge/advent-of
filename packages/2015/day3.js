/**
 * @param {string} directions
 * @returns number
 */
const Day3Part1 = (directions) => {
	/** @type {number} */
	let xPos = 0
	/** @type {number} */
	let yPos = 0
	/** @type {Array.<[number, number]>} */
	const housesVisited = [[xPos, yPos]]
	/** @type {string[]} */
	const directionList = directions.split("")

	directionList.forEach((direction) => {
		switch (direction) {
			case "^":
				yPos++
				break
			case "v":
				yPos--
				break
			case ">":
				xPos++
				break
			case "<":
				xPos--
				break
			default:
				break
		}
		if (
			!housesVisited.some((house) =>
				house[0] === xPos && house[1] === yPos
			)
		) {
			housesVisited.push([xPos, yPos])
		}
	})

	return housesVisited.length
}


/**
 * @param {string} directions
 * @returns number
 */
const Day3Part2 = (directions) => {

	/** @type {number} */
	let xPosSanta = 0
	/** @type {number} */
	let yPosSanta = 0
	/** @type {number} */
	let xPosRobo = 0
	/** @type {number} */
	let yPosRobo = 0
	/** @type {Array.<[number, number]>} */
	const housesVisited = [[xPosSanta, yPosSanta]]
	/** @type {string[]} */
	const directionList = directions.split("")
	/** @type {string[]} */
	const directionListSanta = directionList.filter((_, index) => index % 2 === 1)
	/** @type {string[]} */
	const directionListRobo = directionList.filter((_, index) => index % 2 === 0)

	directionListSanta.forEach((direction) => {
		switch (direction) {
			case "^":
				yPosSanta++
				break
			case "v":
				yPosSanta--
				break
			case ">":
				xPosSanta++
				break
			case "<":
				xPosSanta--
				break
			default:
				break
		}
		if (
			!housesVisited.some((house) =>
				house[0] === xPosSanta && house[1] === yPosSanta
			)
		) {
			housesVisited.push([xPosSanta, yPosSanta])
		}
	})

	directionListRobo.forEach((direction) => {
		switch (direction) {
			case "^":
				yPosRobo++
				break
			case "v":
				yPosRobo--
				break
			case ">":
				xPosRobo++
				break
			case "<":
				xPosRobo--
				break
			default:
				break
		}
		if (
			!housesVisited.some((house) =>
				house[0] === xPosRobo && house[1] === yPosRobo
			)
		) {
			housesVisited.push([xPosRobo, yPosRobo])
		}
	})

	return housesVisited.length
}

export { Day3Part1, Day3Part2 }
