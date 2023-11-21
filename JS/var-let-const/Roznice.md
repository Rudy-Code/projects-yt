# var vs let vs const

## var

- mają zakres funkcji przez co są dostępne w ramach całej funkcji
- jeśli var zostanie użyta poza jakąkolwiek funkcją, zmienna staje się globalna
- można ponownie zadeklarować zmienną var
- można ponownie przypisać wartość do zmiennej var

```js
var x = 1

function example() {
	var x = 10
	console.log(x) // Output: 10
}
example()
console.log(x) // Output: 1
```

## let

- mają zakres blokowy
- są dostępne tylko w bloku, w którym zostały zadeklarowane
- nie można ponownie zadeklarować zmiennej let w tym samym zakresie
- można ponownie przypisać wartość do zmiennej let
- w przeciwieństwie do var, let nie pozwala na ponowną deklarację zmiennej w tym samym zakresie, zapobiegając przypadkowemu ponownemu przypisaniu.

```js
let y = 1
let y = 10 // SyntaxError: Identifier 'y' has already been declared
y = 100

function example() {
	let y = 10
	console.log(y) // Output: 10
}
example()
console.log(y) // Output: 100
```

## const

- mają zakres blokowy
- są dostępne tylko w bloku, w którym zostały zadeklarowane
- nie można ponownie zadeklarować zmiennej const w tym samym zakresie
- nie można ponownie przypisać wartości do zmiennej const

```js
const z = 5
const z = 500 // SyntaxError: Identifier 'z' has already been declared
z = 1000 // TypeError: Assignment to constant variable.

function example() {
	const z = 10
	console.log(z) // Output: 10
}
example()
console.log(z) // Output: 5
```

## Scope

```js
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
```
