import { expect, test } from "vitest";
import { ReadFile } from "../../packages/2015/Common/FileHandling.js";

test("common read file lines", () => {
	/** string[] */
	const lines = ReadFile("../../packages/2015/Data/Day2.dat");
	expect(lines).toBeDefined();
	expect(lines).toHaveLength(1000);
});
