import { expect, test } from "vitest"
import { Day6Part1, Day6Part2 } from "../../packages/2015/day6.js"
import { ReadFile } from "../../packages/2015/Common/FileHandling.js"

test("Day 6 Part 1 - Demo", () => {
	expect(Day6Part1(["turn on 0,0 through 999,999"])).toEqual(1000000)
	expect(Day6Part1(["toggle 0,0 through 999,0"])).toEqual(1000)
	expect(Day6Part1(["turn off 499,499 through 500,500"])).toEqual(0)
})

test("Day 6 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day6.dat")
	console.log(Day6Part1(lines))
	expect(true).toBe(true)
})

test("Day 6 Part 2 - Demo", () => {
	expect(Day6Part2(["turn on 0,0 through 0,0"])).toEqual(1)
	expect(Day6Part2(["toggle 0,0 through 999,999"])).toEqual(2000000)
})

test("Day 6 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day6.dat")
	console.log(Day6Part2(lines))
	expect(true).toBe(true)
})
