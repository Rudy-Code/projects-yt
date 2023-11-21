function example() {
	var x = 1
	let y = 2
	const z = 3

	if (true) {
		var x = 10 // Redeclaration of 'x' within the same scope
		let y = 20 // New block-scoped variable 'y'
		const z = 30 // New block-scoped constant 'z'

		console.log(x, y, z) // Output: 10, 20, 30
	}

	console.log(x, y, z) // Output: 10, 2, 3
}

example()
