import { expect, test } from "vitest";
import { Day5Part1, Day5Part2 } from "../../packages/2015/day5.js";
import { ReadFile } from "../../packages/2015/Common/FileHandling.js";

test("Day 5 Part 1 - Demo", () => {
	expect(Day5Part1(["ugknbfddgicrmopn"])).toEqual(1);
	expect(Day5Part1(["aaa"])).toEqual(1);
	expect(Day5Part1(["jchzalrnumimnmhp"])).toEqual(0);
	expect(Day5Part1(["haegwjzuvuyypxyu"])).toEqual(0);
	expect(Day5Part1(["dvszwmarrgswjxmb"])).toEqual(0);
});

test("Day 5 Part 1 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day5.dat");
	console.log(Day5Part1(lines));
	expect(true).toBe(true);
});

test("Day 5 Part 2 - Demo", () => {
	expect(Day5Part2(["qjhvhtzxzqqjkmpb"])).toEqual(1);
	expect(Day5Part2(["xxyxx"])).toEqual(1);
	expect(Day5Part2(["uurcxstgmygtbstg"])).toEqual(0);
	expect(Day5Part2(["ieodomkazucvgmuy"])).toEqual(0);
});

test("Day 5 Part 2 - Answer", () => {
	/** @type {string[]} */
	const lines = ReadFile("../../packages/2015/Data/Day5.dat");
	console.log(Day5Part2(lines));
	expect(true).toBe(true);
});
