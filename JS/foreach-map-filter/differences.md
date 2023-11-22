# forEeach vs map vs filter

## forEach

The forEach method allows you to iterate over each element in an array and perform a specific action for each element.

- does not return a new array

```js
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(number => console.log(number)) // 1, 2, 3, 4, 5

```

## map

The map method creates a new array by applying the provided function to each element in the original array

- Returns a new array of the same length as the original array, where each element is the result of the applied function

```js
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers) // [2, 4, 6, 8, 10].
```

## filter

The filter method creates a new array with all elements that passed the specified test.

- Returns a new array of less or equal length than the original array
- Contains only elements that passed the test

```js
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers) // [2, 4].
```
