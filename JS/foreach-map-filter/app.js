// ?foreach
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(number => console.log(number))

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach((number, index) => console.log(`number: ${number}, index: ${index}`))

for (let i = 0; i < numbers.length; i++) {
    console.log(`number: ${numbers[i]}, index: ${i}`);
}

// ?map
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers)

// ?filter
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

const btns = document.querySelectorAll('button')
console.log(btns)
btns.forEach(btn => btn.addEventListener('click', () => console.log('Kliknięto przycisk')))
