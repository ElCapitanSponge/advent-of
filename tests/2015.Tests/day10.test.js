import { expect, test } from "vitest"
import { Day10 } from "../../packages/2015/day10.js"

test("Day 10 Part 1 - Demo", () => {
	expect(Day10("1", 1)).toEqual("11")
	expect(Day10("11", 1)).toEqual("21")
	expect(Day10("21", 1)).toEqual("1211")
	expect(Day10("1211", 1)).toEqual("111221")
	expect(Day10("111221", 1)).toEqual("312211")
})

test("Day 10 Part 1 - Answer", () => {
	/** @type {string} */
	const input = "1321131112"
	/** @type {number} */
	const iterations = 40
	console.log(Day10(input, iterations).length)
	expect(true).toBe(true)
})

test("Day 10 Part 2 - Answer", () => {
	/** @type {string} */
	const input = "1321131112"
	/** @type {number} */
	const iterations = 50
	console.log(Day10(input, iterations).length)
	expect(true).toBe(true)
})
