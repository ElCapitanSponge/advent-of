import { expect, test } from "vitest"
import { Day7Part1, Day7Part2 } from "../../packages/2015/day7.js"
import { ReadFile } from "../../packages/2015/Common/FileHandling.js"

test("Day 7 Part 1 - Demo", () => {
	/** @type {string[]} */
	const testCircuit = [
		"123 -> x",
		"456 -> y",
		"x AND y -> d",
		"x OR y -> e",
		"x LSHIFT 2 -> f",
		"y RSHIFT 2 -> g",
		"NOT x -> h",
		"NOT y -> i",
	]

	expect(Day7Part1(testCircuit, "d")).toEqual(72)
	expect(Day7Part1(testCircuit, "e")).toEqual(507)
	expect(Day7Part1(testCircuit, "f")).toEqual(492)
	expect(Day7Part1(testCircuit, "g")).toEqual(114)
	expect(Day7Part1(testCircuit, "h")).toEqual(65412)
	expect(Day7Part1(testCircuit, "i")).toEqual(65079)
	expect(Day7Part1(testCircuit, "x")).toEqual(123)
	expect(Day7Part1(testCircuit, "y")).toEqual(456)


	/** @type {string[]} */
	const testCircuit2 = [
		"x AND y -> d",
		"x LSHIFT 2 -> f",
		"x OR y -> e",
		"123 -> x",
		"NOT y -> i",
		"y RSHIFT 2 -> g",
		"NOT x -> h",
		"456 -> y",
	]

	expect(Day7Part1(testCircuit2, "e")).toEqual(507)
	expect(Day7Part1(testCircuit2, "f")).toEqual(492)
	expect(Day7Part1(testCircuit2, "g")).toEqual(114)
	expect(Day7Part1(testCircuit2, "h")).toEqual(65412)
	expect(Day7Part1(testCircuit2, "i")).toEqual(65079)
	expect(Day7Part1(testCircuit2, "x")).toEqual(123)
	expect(Day7Part1(testCircuit2, "y")).toEqual(456)
})

test("Day 7 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day7.dat")
	console.log(Day7Part1(lines, "a"))
	expect(true).toBe(true)
})

test("Day 7 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day7.dat")
	console.log(Day7Part2(lines, "a", "b", 16076))
	expect(true).toBe(true)
})
