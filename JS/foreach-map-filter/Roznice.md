# forEeach vs map vs filter

## forEach

Metoda forEach umożliwia iterację po każdym elemencie w tablicy i wykonanie określonej akcji dla każdego elementu.

- nie zwraca nowej tablicy

```js
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(number => console.log(number)) // 1, 2, 3, 4, 5
```

## map

Metoda map tworzy nową tablicę poprzez zastosowanie dostarczonej funkcji do każdego elementu w oryginalnej tablicy

- Zwraca nową tablicę o tej samej długości co oryginalna tablica, gdzie każdy element jest wynikiem zastosowanej funkcji

```js
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers) // [2, 4, 6, 8, 10]
```

## filter

Metoda filter tworzy nową tablicę ze wszystkimi elementami, które przeszły podany test.

- Zwraca nową tablicę o mniejszej lub równej długości niż oryginalna tablica
- Zawiera tylko elementy, które przeszły test

```js
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers) // [2, 4]
```

