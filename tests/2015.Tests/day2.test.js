import { expect, test } from "vitest";
import { Day2Part1 } from "../../packages/2015/day2.js";
import { ReadFile } from "../../packages/2015/Common/FileHandling.js";

test("Day 2 Part 1 - Demo", () => {
	expect(Day2Part1(["2x3x4"])).toEqual(58);
	expect(Day2Part1(["1x1x10"])).toEqual(43);
});

test("Day 2 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day2.dat");
	console.log(Day2Part1(lines));
	expect(true).toBe(true);
});
