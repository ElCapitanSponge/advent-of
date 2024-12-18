import { expect, test } from "vitest"
import { Day10Part1 } from "../../packages/2015/day10.js"

test("Day 10 Part 1 - Demo", () => {
	expect(Day10Part1("1", 1)).toEqual("11")
	expect(Day10Part1("11", 1)).toEqual("21")
	expect(Day10Part1("21", 1)).toEqual("1211")
	expect(Day10Part1("1211", 1)).toEqual("111221")
	expect(Day10Part1("111221", 1)).toEqual("312211")
})

test("Day 10 Part 1 - Answer", () => {
	/** @type {string} */
	const input = "1321131112"
	/** @type {number} */
	const iterations = 40
	console.log(Day10Part1(input, iterations).length)
	expect(true).toBe(true)
})
