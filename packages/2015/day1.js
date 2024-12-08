/**
 * @param {string} lisp
 */
function Day1Part1(lisp) {
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

export { Day1Part1 };
