/**
 * @param {string} word
 * @returns bool
 */
const HasInvalidPair = (word) => {
	if (word.includes("ab")) {
		return true
	}
	if (word.includes("cd")) {
		return true
	}
	if (word.includes("pq")) {
		return true
	}
	if (word.includes("xy")) {
		return true
	}

	return false
}

/**
 * @param {string} word
 * @returns bool
 */
const HasDoubleLetter = (word) => /(.)\1/.test(word)

/**
 * @param {string} word
 * @returns bool
 */
const HasThreeVowels = (word) => {
	/** @type {number} */
	let vowelCount = 0

	for (let i = 0; i < word.length; i++) {
		if (
			word[i] === "a" ||
			word[i] === "e" ||
			word[i] === "i" ||
			word[i] === "o" ||
			word[i] === "u"
		) {
			vowelCount++
		}
	}

	return vowelCount >= 3
}

/**
 * @param {string[]} words
 * @returns number
 */
const Day5Part1 = (words) => {
	/** @type {number} */
	let niceWords = 0

	words.forEach(word => {
		if (
			!HasInvalidPair(word) &&
			HasDoubleLetter(word) &&
			HasThreeVowels(word)
		) {
			niceWords++
		}
	})

	return niceWords
}

/**
 * @param {string} word
 * @returns bool
 */
const HasPair = (word) => {
	/** @type {boolean} */
	let pair = false

	for (let i = 0; i < word.length - 1; i++) {
		const pairToCheck = word[i] + word[i + 1]
		if (word.includes(pairToCheck, i + 2)) {
			pair = true
			break
		}
	}

	return pair
}

/**
 * @param {string} word
 * @returns boolean
 */
const HasRepeat = (word) => {
	/** @type {boolean} */
	let repeat = false

	for (let i = 0; i < word.length - 2; i++) {
		if (word[i] === word[i + 2]) {
			repeat = true
			break
		}
	}

	return repeat
}

/**
 * @param {string[]} words
 * @returns number
 */
const Day5Part2 = (words) => {
	/** @type {number} */
	let niceWords = 0

	words.forEach(word => {
		if (
			HasPair(word) &&
			HasRepeat(word)
		) {
			niceWords++
		}
	})

	return niceWords
}

export { Day5Part1, Day5Part2 }
