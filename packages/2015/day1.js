/**
 * @param {string} lisp
 * @returns {number}
 */
function Day1Part1(lisp) {
	/** @type {number} */
	let floor = 0;
	for (let i = 0; i < lisp.length; i++) {
		if (lisp[i] === "(") {
			floor++;
		} else {
			floor--;
		}
	}
	return floor;
}

/**
 * @param {string} lisp
 * @returns {number}
 */
function Day1Part2(lisp) {
	/** @type {number} */
	let floor = 0;
	for (let i = 0; i < lisp.length; i++) {
		if (lisp[i] === "(") {
			floor++;
		} else {
			floor--;
		}
		if (floor === -1) {
			return i + 1;
		}
	}
	return -1;
}

export { Day1Part1, Day1Part2 };
