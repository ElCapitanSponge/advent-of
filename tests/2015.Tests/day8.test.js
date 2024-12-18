/* eslint-disable @stylistic/js/quotes */
import { expect, test } from "vitest"
import { Day8Part1, Day8Part2 } from "../../packages/2015/day8.js"
import { ReadFile } from "../../packages/2015/Common/FileHandling.js"

test("Day 8 Part 1 - Demo", () => {
	/** @type {string[]} */
	const testLines = [
		`""`,
		`"abc"`,
		`"aaa\\"aaa"`,
		`"\\x27"`,
	]
	expect(Day8Part1(testLines)).toEqual(12)
})

test("Day 8 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day8.dat")
	console.log(Day8Part1(lines))
	expect(true).toBe(true)
})

test("Day 8 Part 2 - Demo", () => {
	/** @type {string[]} */
	const testLines = [
		`""`,
		`"abc"`,
		`"aaa\\"aaa"`,
		`"\\x27"`,
	]
	expect(Day8Part2(testLines)).toEqual(19)
})

test("Day 8 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day8.dat")
	console.log(Day8Part2(lines))
	expect(true).toBe(true)
})
