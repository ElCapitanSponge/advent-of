import { expect, test } from "vitest";
import { Day4Part1 } from "../../packages/2015/day4.js";

test("Day 4 Part 1 - Demo", () => {
	expect(Day4Part1("abcdef")).toEqual(609043);
	expect(Day4Part1("pqrstuv")).toEqual(1048970);
});

test("Day 4 Part 1 - Answer", () => {
	console.log(Day4Part1("ckczppom"));
	expect(true).toBe(true);
});
