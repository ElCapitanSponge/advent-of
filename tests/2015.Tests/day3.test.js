import { expect, test } from "vitest";
import { Day3Part1, Day3Part2 } from "../../packages/2015/day3.js";
import { ReadFile } from "../../packages/2015/Common/FileHandling.js";

test("Day 2 Part 1 - Demo", () => {
	expect(Day3Part1(">")).toEqual(2);
	expect(Day3Part1("^>v<")).toEqual(4);
	expect(Day3Part1("^v^v^v^v^v")).toEqual(2);
});

test("Day 2 Part 1 - Answer", () => {
	/** @type {string} */
	const line = ReadFile("../../packages/2015/Data/Day3.dat").join("");
	console.log(Day3Part1(line));
	expect(true).toBe(true);
});

test("Day 2 Part 2 - Demo", () => {
	expect(Day3Part2("^v")).toEqual(3);
	expect(Day3Part2("^>v<")).toEqual(3);
	expect(Day3Part2("^v^v^v^v^v")).toEqual(11);
});

test("Day 2 Part 2 - Answer", () => {
	/** @type {string} */
	const line = ReadFile("../../packages/2015/Data/Day3.dat").join("");
	console.log(Day3Part2(line));
	expect(true).toBe(true);
});
