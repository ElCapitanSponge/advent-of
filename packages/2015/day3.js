/**
 * @param {string} directions
 * @returns number
 */
const Day3Part1 = (directions) => {
	/** @type {number} */
	let xPos = 0;
	/** @type {number} */
	let yPos = 0;
	/** @type {Array.<[number, number]>} */
	const housesVisited = [[xPos, yPos]];
	/** @type {string[]} */
	const directionList = directions.split("");

	directionList.forEach((direction) => {
		switch (direction) {
			case "^":
				yPos++;
				break;
			case "v":
				yPos--;
				break;
			case ">":
				xPos++;
				break;
			case "<":
				xPos--;
				break;
			default:
				break;
		}
		if (
			!housesVisited.some((house) =>
				house[0] === xPos && house[1] === yPos
			)
		) {
			housesVisited.push([xPos, yPos]);
		}
	});

	return housesVisited.length;
};

export { Day3Part1 };
