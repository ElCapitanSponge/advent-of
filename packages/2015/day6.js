class Day6 {
	/**
	 * @constructor
	 * @param {1 | 2} part
	 */
	constructor(part) {
		this.#lights = this.#LightGrid()
		this.#part = part
	}

	/** @type {1 | 2} */
	#part
	/** @type {number[][]} */
	#lights

	/**
	 * @returns {number[][]} Grid of lights
	 */
	#LightGrid = () => {
		/** @type {number} */
		const size = 1000
		/** @type {number[][]} */
		const grid = []

		for (let i = 0; i < size; i++) {
			grid[i] = []
			for (let j = 0; j < size; j++) {
				grid[i][j] = 0
			}
		}

		return grid
	}

	/**
	 * @returns {number} lights that are on
	 */
	lightsThatAreOn = () => this.#lights.flat().filter((light) => light > 0).length

	/**
	 * @returns {number} the brightness of all the lights
	 */
	totalBrightness = () => this.#lights.flat().reduce((acc, light) => acc + light, 0)

	/**
	 * @param {string} instruction
	 */
	parseInstruction = (instruction) => {
		const [command, start, end] = instruction.match(/(toggle|turn on|turn off) (\d+,\d+) through (\d+,\d+)/).slice(1)
		const [startX, startY] = start.split(',').map(Number)
		const [endX, endY] = end.split(',').map(Number)

		switch (command) {
			case 'turn on':
				this.#turnOn([startX, startY], [endX, endY])
				break
			case 'turn off':
				this.#turnOff([startX, startY], [endX, endY])
				break
			case 'toggle':
				this.#toggle([startX, startY], [endX, endY])
				break
		}
	}

	/**
	 * @param {[number, number]} start
	 * @param {[number, number]} end
	 * @returns {void}
	 */
	#turnOn = (start, end) => {
		for (let i = start[0]; i <= end[0]; i++) {
			for (let j = start[1]; j <= end[1]; j++) {
				if (this.#part === 1) {
					this.#lights[i][j] = 1
				}

				if (this.#part === 2) {
					this.#lights[i][j]++
				}
			}
		}
	}

	/**
	 * @param {[number, number]} start
	 * @param {[number, number]} end
	 * @returns {void}
	 */
	#turnOff = (start, end) => {
		for (let i = start[0]; i <= end[0]; i++) {
			for (let j = start[1]; j <= end[1]; j++) {
				if
					(this.#part === 1) {
					this.#lights[i][j] = 0
				}

				if (this.#part === 2) {
					this.#lights[i][j]--
					if (this.#lights[i][j] < 0) {
						this.#lights[i][j] = 0
					}
				}
			}
		}
	}

	/**
	 * @param {[number, number]} start
	 * @param {[number, number]} end
	 * @returns {void}
	 */
	#toggle = (start, end) => {
		for (let i = start[0]; i <= end[0]; i++) {
			for (let j = start[1]; j <= end[1]; j++) {
				if (this.#part === 1) {
					this.#lights[i][j] = this.#lights[i][j] === 0 ? 1 : 0
				}

				if (this.#part === 2) {
					this.#lights[i][j] = this.#lights[i][j] + 2
				}
			}
		}
	}
}

/**
 * @param {string[]} instructions
 * @returns {number} lights that are on
 */
const Day6Part1 = (instructions) => {
	const day6 = new Day6(1)
	instructions.forEach((instruction) => day6.parseInstruction(instruction))
	return day6.lightsThatAreOn()
}

/**
 * @param {string[]} instructions
 * @returns {number} lights that are on
 */
const Day6Part2 = (instructions) => {
	const day6 = new Day6(2)
	instructions.forEach((instruction) => day6.parseInstruction(instruction))
	return day6.totalBrightness()
}

export { Day6Part1, Day6Part2 }
