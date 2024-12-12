/**
 * @param {string} word
 * @returns bool
 */
const HasInvalidPair = (word) => {
	if (word.includes("ab")) {
		return true;
	}
	if (word.includes("cd")) {
		return true;
	}
	if (word.includes("pq")) {
		return true;
	}
	if (word.includes("xy")) {
		return true;
	}

	return false;
}

/**
 * @param {string} word
 * @returns bool
 */
const HasDoubleLetter = (word) => /(.)\1/.test(word);

/**
 * @param {string} word
 * @returns bool
 */
const HasThreeVowels = (word) => {
	/** @type {number} */
	let vowelCount = 0;

	for (let i = 0; i < word.length; i++) {
		if (
			word[i] === "a" ||
			word[i] === "e" ||
			word[i] === "i" ||
			word[i] === "o" ||
			word[i] === "u"
		) {
			vowelCount++;
		}
	}

	return vowelCount >= 3;
}

/**
 * @param {string[]} words
 * @returns number
 */
const Day5Part1 = (words) => {
	/** @type {number} */
	let niceWords = 0;

	words.forEach(word => {
		if (
			!HasInvalidPair(word) &&
			HasDoubleLetter(word) &&
			HasThreeVowels(word)
		) {
			niceWords++;
		}
	})

	return niceWords;
}

/**
 * @param {string[]} words
 * @returns number
 */
const Day5Part2 = (words) => {
	/** @type {number} */
	let niceWords = 0;

	words.forEach(word => {
	})

	return niceWords;
}

export { Day5Part1, Day5Part2 };
