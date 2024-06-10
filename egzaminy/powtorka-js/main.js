// !Szybkie powtórzenie z JS do egzamin INF 03 / EE09

// ? 0. typy danych

// Różne typy danych w JavaScript
const string = 'To jest tekst' // String
const number = 42 // Number
const boolean = true // Boolean
const array = [1, 2, 3] // Array
const object = { name: 'Janek', age: 30 } // Object

console.log(string, number, boolean, array, object)
console.log('--------------------')

// ? 1. zmienne const i let oraz instrukcje warunkowe

// Deklaracja zmiennej const - jej wartość nie może być zmieniona po przypisaniu
const name = 'Janek'
console.log(name) // Wyświetli 'Janek'

// Próba zmiany wartości zmiennej const spowoduje błąd
// name = 'Arek'; // Błąd: Assignment to constant variable
// console.log(name); // Nie zostanie wykonane

// Deklaracja zmiennej let - jej wartość może być zmieniona
let age = 30
console.log(age) // Wyświetli 30

// Zmiana wartości zmiennej let jest dozwolona
age = 31
console.log(age) // Wyświetli 31

// Instrukcja warunkowa if...elseif...else
if (age >= 18) {
	console.log('Jesteś pełnoletni')
} else if (age > 11 && age < 18) {
	console.log('Jesteś nastolatkiem')
} else {
	console.log('Jesteś dzieckiem')
}

console.log('--------------------')
// ? 2. pętle

// Pętla for - wykonuje blok kodu określoną liczbę razy
for (let i = 0; i < 5; i++) {
	console.log('Wartość i:', i) // Wyświetli wartości i od 0 do 4
}
console.log('--------------------')

// Pętla while - wykonuje blok kodu tak długo, jak warunek jest prawdziwy
let count = 0 // jeśli zmienna count będzie miała wartość 3 to pętla nie wykona się ani razu
while (count < 3) {
	console.log('Wartość count:', count) // Wyświetli wartości count od 0 do 2
	count++
}
console.log('--------------------')

// Pętla do...while - wykonuje blok kodu przynajmniej raz, a następnie tak długo, jak warunek jest prawdziwy
let number1 = 0 // jeśli zmienna number1 będzie miała wartość 3 to pętla wykona się tylko raz
do {
	console.log('Wartość number1:', number1) // Wyświetli wartości number od 0 do 2
	number1++
} while (number1 < 3)
console.log('--------------------')

// ? 3. pobieranie elementów

// Pobieranie elementu po ID
const elementById = document.getElementById('myElement')
console.log(elementById)

// Pobieranie elementów po klasie
const elementsByClassName = document.getElementsByClassName('myClass')
console.log(elementsByClassName)

// Pobieranie elementów za pomocą selektora CSS
const elementBySelector = document.querySelector('.myClass')
console.log(elementBySelector)

// Pobieranie wszystkich elementów za pomocą selektora CSS
const allElementsBySelector = document.querySelectorAll('.myClass')
console.log(allElementsBySelector)

console.log('--------------------')

// ? 4. template literals / string (grawisy) oraz funkcje

const message = 'Hello, ' + name + '!'
console.log(message) // Wyświetli 'Hello, Janek!'

// Użycie template literals
const message2 = `Hello, ${name}!`
console.log(message2) // Wyświetli 'Hello, Janek!'

console.log('--------------------')

// Definicja funkcji
function greet(name) {
	// return 'Witaj, ' + name + '!'
	return `Witaj, ${name}!`
}

// lub za pomocą arrow function

const greet1 = name => {
	return `Witaj, ${name}!`
}

// Wywołanie funkcji
const greeting = greet('Janek')
console.log(greeting) // Wyświetli 'Witaj, Janek!'
console.log('--------------------')

// ? 5. Wywołanie funkcji za pomocą przycisków

function showAlert() {
	alert('Przycisk został kliknięty!')
}

// lub

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
	alert('Przycisk został kliknięty!')
})

// jak działa addEventListener => https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const hoverDiv = document.querySelector('.hoverDiv')

hoverDiv.addEventListener('mouseover', e => {
	hoverDiv.style.backgroundColor = 'lightgreen'
})

hoverDiv.addEventListener('mouseout', () => {
	hoverDiv.style.backgroundColor = 'lightblue'
})

// ? 6. Modyfikowanie atrybutów HTML

const image = document.querySelector('img')

image.addEventListener('click', () => {
	image.setAttribute('src', 'szybkosc-strony.png') // Zmiana atrybutu src
	image.alt = 'Obraz opisujący jak ważna jest szybkość strony' // Zmiana atrybutu alt
})

// ? 7. Math.round, Math.ceil, Math.floor

const number2 = 4.7

// Zaokrąglenie do najbliższej liczby całkowitej
const rounded = Math.round(number2)
console.log(rounded) // Wyświetli 5

// Zaokrąglenie w górę do najbliższej liczby całkowitej
const ceiled = Math.ceil(number2)
console.log(ceiled) // Wyświetli 5

// Zaokrąglenie w dół do najbliższej liczby całkowitej
const floored = Math.floor(number2)
console.log(floored) // Wyświetli 4

console.log('--------------------')

// ? tablice

const fruits = ['apple', 'banana', 'cherry']

// Dodanie elementu na końcu tablicy

fruits.push('mango')
console.log(fruits) // Wyświetli ['apple', 'banana', 'cherry', 'mango']

// Usunięcie ostatniego elementu z tablicy

fruits.pop()

console.log(fruits) // Wyświetli ['apple', 'banana', 'cherry']

// Usunięcie pierwszego elementu z tablicy

fruits.shift()

console.log(fruits) // Wyświetli ['banana', 'cherry']

// Dodanie elementu na początku tablicy

fruits.unshift('orange')

console.log(fruits) // Wyświetli ['orange', 'banana', 'cherry']

console.log('--------------------')

// ! index tablicy zaczyna się od 0

console.log(fruits[0]) // Wyświetli 'orange';
console.log('------ for -------')

// wypisane wszystkich elementów tablicy

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}
console.log('----- for each -------')

fruits.forEach(el => {
	console.log(el)
})
