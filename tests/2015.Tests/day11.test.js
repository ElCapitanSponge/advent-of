import { expect, test } from "vitest"
import { Day11 } from "../../packages/2015/day11.js"

test("Day 11 Part 1 - Demo", () => {
	expect(Day11("abcdefgh")).toEqual("abcdffaa")
	expect(Day11("ghijklmn")).toEqual("ghjaabcc")
})

test("Day 11 Part 1 - Answer", () => {
	/** @type {string} */
	const input = "vzbxkghb"
	console.log(Day11(input))
	expect(true).toBe(true)
})

test("Day 11 Part 2 - Answer", () => {
	/** @type {string} */
	const input = "vzbxxyzz"
	console.log(Day11(input))
	expect(true).toBe(true)
})
