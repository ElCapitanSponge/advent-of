export { }

declare global {
	// ENUMS
	type BitwiseOperation = "AND" | "OR" | "LSHIFT" | "RSHIFT" | "NOT" | "ASSIGN";

	// TYPES
	type Wire = {
		name: string;
		value?: number;
		allocation: string;
		allocationLine: number;
	}
}
