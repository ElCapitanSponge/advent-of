/* eslint-disable @stylistic/js/quotes */
import { expect, test } from "vitest"
import { Day12Part1, Day12Part2 } from "../../packages/2015/day12.js"
import { ReadFile } from "../../packages/2015/Common/FileHandling.js"

test("Day 12 Part 1 - Demo", () => {
	/** @type {string} */
	let jsonString = `{"a":2,"b":4}`
	expect(Day12Part1(jsonString)).toEqual(6)
	jsonString = `[1,2,3]`
	expect(Day12Part1(jsonString)).toEqual(6)
	jsonString = `{"a":{"b":4},"c":-1}`
	expect(Day12Part1(jsonString)).toEqual(3)
	jsonString = `[[[3]]]`
	expect(Day12Part1(jsonString)).toEqual(3)
	jsonString = `{"a":[-1,1]}`
	expect(Day12Part1(jsonString)).toEqual(0)
	jsonString = `[-1,{"a":1}]`
	expect(Day12Part1(jsonString)).toEqual(0)
	jsonString = `[]`
	expect(Day12Part1(jsonString)).toEqual(0)
	jsonString = `{}`
	expect(Day12Part1(jsonString)).toEqual(0)
})

test("Day 12 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day12.dat")
	console.log(Day12Part1(lines[0]))
	expect(true).toBe(true)
})

test("Day 12 Part 2 - Demo", () => {
	/** @type {string} */
	let jsonString = `[1,2,3]`
	expect(Day12Part2(jsonString)).toEqual(6)
	jsonString = `[1,{"c":"red","b":2},3]`
	expect(Day12Part2(jsonString)).toEqual(4)
	jsonString = `{"d":"red","e":[1,2,3,4],"f":5}`
	expect(Day12Part2(jsonString)).toEqual(0)
	jsonString = `[1,"red",5]`
	expect(Day12Part2(jsonString)).toEqual(6)
})

test("Day 12 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day12.dat")
	console.log(Day12Part2(lines[0]))
	expect(true).toBe(true)
})
