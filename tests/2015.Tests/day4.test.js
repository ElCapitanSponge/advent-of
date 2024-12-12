import { expect, test } from "vitest"
import { Day4Part1And2 } from "../../packages/2015/day4.js"

test("Day 4 Part 1 - Demo", () => {
	expect(Day4Part1And2("abcdef", 5)).toEqual(609043)
	expect(Day4Part1And2("pqrstuv", 5)).toEqual(1048970)
})

test("Day 4 Part 1 - Answer", () => {
	console.log(Day4Part1And2("ckczppom", 5))
	expect(true).toBe(true)
})

test("Day 4 Part 2 - Answer", () => {
	console.log(Day4Part1And2("ckczppom", 6))
	expect(true).toBe(true)
})
