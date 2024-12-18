import { expect, test } from "vitest"
import { Day10Part1 } from "../../packages/2015/day10.js"

test("Day 10 Part 1 - Demo", () => {
	expect(Day10Part1("1")).toEqual("11")
	expect(Day10Part1("11")).toEqual("21")
	expect(Day10Part1("21")).toEqual("1211")
	expect(Day10Part1("1211")).toEqual("111221")
	expect(Day10Part1("111221")).toEqual("312211")
})

test("Day 10 Part 1 - Answer", () => {
	let input = "1321131112"
	let result = ""

	for (let i = 0; i < 40; i++) {
		result = Day10Part1(input)
		input = result
	}

	console.log(result.length)
	expect(true).toBe(true)
})
