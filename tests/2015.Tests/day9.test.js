import { expect, test } from "vitest"
import { Day9Part1, Day9Part2 } from "../../packages/2015/day9.js"
import { ReadFile } from "../../packages/2015/Common/FileHandling.js"

test("Day 9 Part 1 - Demo", () => {
	/** @type {string[]} */
	const testLines = [
		"London to Dublin = 464",
		"London to Belfast = 518",
		"Dublin to Belfast = 141",
	]
	expect(Day9Part1(testLines)).toEqual(605)
})

test("Day 9 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day9.dat")
	console.log(Day9Part1(lines))
	expect(true).toBe(true)
})

test("Day 9 Part 2 - Demo", () => {
	/** @type {string[]} */
	const testLines = [
		"London to Dublin = 464",
		"London to Belfast = 518",
		"Dublin to Belfast = 141",
	]
	expect(Day9Part2(testLines)).toEqual(982)
})

test("Day 9 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day9.dat")
	console.log(Day9Part2(lines))
	expect(true).toBe(true)
})
