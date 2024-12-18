export { }

declare global {
	// Day 7
	type BitwiseOperation = "AND" | "OR" | "LSHIFT" | "RSHIFT" | "NOT" | "ASSIGN";

	type Wire = {
		name: string;
		value?: number;
		allocation: string;
		allocationLine: number;
	}

	// Day 9
	type TravelRoute = {
		locations: string[];
		distance: number;
	}

	type RouteEntry = {
		from: string;
		to: string;
		distance: number;
	}
}
