// Sources: https://adventofcode.com/2015/day/9

/**
 * @param {string} line
 * @returns {RouteEntry}
 */
const ParseRouteEntry = (line) => {
	/** @type {string[]} */
	const parts = line.split(" = ")
	/** @type {string[]} */
	const cities = parts[0].split(" to ")
	return {
		from: cities[0],
		to: cities[1],
		distance: parseInt(parts[1])
	}
}

/**
 * @param {RouteEntry[]} entries
 * @returns {string[]}
 */
const GetCities = (entries) => {
	/** @type {string[]} */
	const cities = []
	entries.forEach(entry => {
		if (!cities.includes(entry.from)) {
			cities.push(entry.from)
		}
		if (!cities.includes(entry.to)) {
			cities.push(entry.to)
		}
	})
	return cities
}

/**
 * @param {string[]} cities
 * @returns {string[][]}
 */
const GetPermutations = (cities) => {
	/** @type {string[][]} */
	const routes = []

	/**
	 * @param {string[]} arr
	 * @param {string[]} m
	 * @returns {void}
	 */
	function permute(arr, m = []) {
		if (arr.length === 0) {
			routes.push(m)
		} else {
			arr.forEach((_, i) => {
				const current = arr.slice()
				const next = current.splice(i, 1)
				permute(current, m.concat(next))
			})
		}
	}
	permute(cities)
	return routes
}

/**
 * @param {RouteEntry[]} entries
 * @param {string[]} cities
 * @returns {TravelRoute[]}
 */
const GetRoutes = (entries, cities) => {
	/** @type {TravelRoute[]} */
	const routes = []

	GetPermutations(cities).forEach(route => {
		/** @type {TravelRoute} */
		const travelRoute = {
			locations: route,
			distance: 0,
		}
		for (let i = 0; i < route.length - 1; i++) {
			const entry = entries.find(e =>
				(e.from === route[i] && e.to === route[i + 1]) ||
				(e.from === route[i + 1] && e.to === route[i])
			)
			travelRoute.distance += entry?.distance ?? 0
		}
		routes.push(travelRoute)
	})

	return routes
}

/**
 * @param {string[]} lines
 * @returns {number}
 */
const Day9Part1 = (lines) => {
	/** @type {RouteEntry[]} */
	const entries = []
	/** @type {TravelRoute[]} */
	const routes = []
	/** @type {string[]} */
	const cities = []

	lines.forEach(line => entries.push(ParseRouteEntry(line)))
	cities.push(...GetCities(entries))
	routes.push(...GetRoutes(entries, cities))

	/** @type {TravelRoute?} */
	const shortestRoute = routes.sort((a, b) => b.distance - a.distance).pop()
	console.log(shortestRoute.locations.join(" -> "))
	return shortestRoute?.distance ?? -1
}

/**
 * @param {string[]} lines
 * @returns {number}
 */
const Day9Part2 = (lines) => {
	/** @type {RouteEntry[]} */
	const entries = []
	/** @type {TravelRoute[]} */
	const routes = []
	/** @type {string[]} */
	const cities = []

	lines.forEach(line => entries.push(ParseRouteEntry(line)))
	cities.push(...GetCities(entries))
	routes.push(...GetRoutes(entries, cities))

	/** @type {TravelRoute?} */
	const longestRoute = routes.sort((a, b) => a.distance - b.distance).pop()
	console.log(longestRoute.locations.join(" -> "))
	return longestRoute?.distance ?? -1
}

export { Day9Part1, Day9Part2 }
