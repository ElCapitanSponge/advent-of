/**
 * @param {string} password
 * @returns {boolean} true if the password is valid, otherwise false
 *
 * @description Check for two pairs of letters that are not overlapping
 */
const hasLettersPairs = (password) => {
	/** @type {string[]} */
	const pairs = []

	for (let i = 0; i < password.length - 1; i++) {
		if (password[i] === password[i + 1]) {
			pairs.push(password[i])
			i++
		}
	}

	return pairs.length >= 2
}

/**
 * @param {string} password
 * @returns {boolean} false if valid characters used, otherwise true
 *
 * @description Check for invalid characters i, o and l
 */
const hasInvalidChars = (password) => {
	if (
		password.includes("i") ||
		password.includes("o") ||
		password.includes("l")
	) {
		return true
	}
	return false
}

/**
 * @param {string} password
 * @returns {boolean} true if the password is valid, otherwise false
 *
 * @description Check for a stright of three consecutive letters
 */
const hasStraight = (password) => {
	for (let i = 0; i < password.length - 2; i++) {
		if (
			password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) &&
			password.charCodeAt(i + 1) + 1 === password.charCodeAt(i + 2)
		) {
			return true
		}
	}
	return false
}

/**
 * @param {string} password
 * @returns {string} Next password
 */
const nextPassword = (password) => {
	/** @type {string} */
	let nextPassword = password

	const z = "z".charCodeAt(0)

	for (let i = password.length - 1; i >= 0; i--) {
		/** @type {number} */
		let charCode = password.charCodeAt(i)

		if (charCode === z) {
			nextPassword = `${nextPassword.substring(0, i)}a${nextPassword.substring(i + 1)}`
		} else {
			const nextChar = String.fromCharCode(charCode + 1)
			const preChar = nextPassword.substring(0, i)
			const postChar = nextPassword.substring(i + 1)
			nextPassword = `${preChar}${nextChar}${postChar}`
			break
		}
	}

	return nextPassword
}

/**
 * @param {string} currentPassword
 * @returns {string} Returns the next password
 */
const Day11 = (currentPassword) => {
	/** @type {string} */
	let newPassword = ""

	newPassword = nextPassword(currentPassword)

	while (
		!hasLettersPairs(newPassword) ||
		hasInvalidChars(newPassword) ||
		!hasStraight(newPassword)
	) {
		newPassword = nextPassword(newPassword)
	}

	return newPassword
}

export { Day11 }
