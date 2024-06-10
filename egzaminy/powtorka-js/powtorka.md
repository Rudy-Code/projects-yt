# Szybkie powtórzenie z JS do egzaminu INF 03 / EE09

## 0. Typy danych

Różne `typy danych` w JavaScript:

```javascript
const string = 'To jest tekst' // String
const number = 42 // Number
const boolean = true // Boolean
const array = [1, 2, 3] // Array
const object = { name: 'Janek', age: 30 } // Object

console.log(string, number, boolean, array, object)
```

## 1. Zmienne const i let oraz instrukcje warunkowe

Deklaracja zmiennej `const` - jej wartość nie może być zmieniona po przypisaniu:

```javascript
const name = 'Janek'
console.log(name) // Wyświetli 'Janek'

// Próba zmiany wartości zmiennej const spowoduje błąd
// name = 'Arek'; // Błąd: Assignment to constant variable
// console.log(name); // Nie zostanie wykonane
```

Deklaracja zmiennej `let` - jej wartość może być zmieniona:

```js
let age = 30
console.log(age) // Wyświetli 30

// Zmiana wartości zmiennej let jest dozwolona
age = 31
console.log(age) // Wyświetli 31
```

Instrukcja warunkowa `if...elseif...else`:

```js
if (age >= 18) {
	console.log('Jesteś pełnoletni')
} else if (age > 11 && age < 18) {
	console.log('Jesteś nastolatkiem')
} else {
	console.log('Jesteś dzieckiem')
}
```

## 2. Pętle

Pętla `for`:

```js
for (let i = 0; i < 5; i++) {
	console.log('Wartość i:', i) // Wyświetli wartości i od 0 do 4
}
```

Pętla `while` - wykonuje blok kodu tak długo, jak warunek jest prawdziwy:

```js
let count = 0
while (count < 3) {
	console.log('Wartość count:', count) // Wyświetli wartości count od 0 do 2
	count++
}
```

Pętla `do...while` - wykonuje blok kodu przynajmniej raz, a następnie tak długo, jak warunek jest prawdziwy:

```js
let number1 = 0
do {
	console.log('Wartość number1:', number1) // Wyświetli wartości number1 od 0 do 2
	number1++
} while (number1 < 3)
```

```js
let number12 = 3
do {
	console.log('Wartość number1:', number12) // Wyświetli wartości number12 3
	number12++
} while (number12 < 3)
```

## 3. Pobieranie elementów

Pobieranie elementu po `ID`:

```html
<div id="myElement">This is an element with id 'myElement'</div>
```

```js
const elementById = document.getElementById('myElement') // wyświetli element z id 'myElement'
```

Pobieranie elementu po `klasie`:

```html
<div class="myClass">This is an element with class 'myClass'</div>
<div class="myClass">This is another element with class 'myClass'</div>
```

```js
const elementsByClassName = document.getElementsByClassName('myClass') // wyświetli wszystkie elementy z klasą 'myClass'
```

Pobieranie elementów za pomocą `selektora CSS`

```js
const elementBySelector = document.querySelector('.myClass') // wyświetli pierwszy element z klasą 'myClass'
```

Pobieranie wszystkich elementów za pomocą `selektora CSS`:

```js
const allElementsBySelector = document.querySelectorAll('.myClass') // wyświetli wszystkie elementy z klasą 'myClass'
```

## 4. Template Literals / String (Gravis) oraz Funkcje

Użycie `template literals`:

```js
const message = 'Hello, ' + name + '!'
console.log(message) // Wyświetli 'Hello, Janek!'

const message2 = `Hello, ${name}!`
console.log(message2) // Wyświetli 'Hello, Janek!'
```

Definicja `funkcji`:

```js
// funckja zwykła
// function, nazwa, argumenty, ciało funkcji

function greet(name) {
	return `Witaj, ${name}!`
}

// funckja strzałkowa (arrow function)
// nazwa, argumenty, strzałka, ciało funkcji

const greet1 = name => {
	return `Witaj, ${name}!`
}

// Wywołanie funkcji
const greeting = greet('Janek')
console.log(greeting) // Wyświetli 'Witaj, Janek!'
```

## 5. Wywołanie funkcji za pomocą przycisków

Definicja funkcji pokazującej alert:

```html
<!-- zdarzenie w przycisku -->
<button onclick="showAlert()">Kliknij mnie (onclick)</button>
<!-- sama klasa i pozniejsze odwołanie się do niej -->
<button class="btn">Kliknij mnie JS</button>
```

```js
// dla 1 przycisku zdarzenie onclick
function showAlert() {
	alert('Przycisk został kliknięty!')
}

// lub dla 2 przycisku zdarzenie dla klasy
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
	alert('Przycisk został kliknięty!')
})
```

Jak działa `addEventListener`: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

```js
const hoverDiv = document.querySelector('.hoverDiv')
hoverDiv.addEventListener('mouseover', e => {
	hoverDiv.style.backgroundColor = 'lightgreen'
	// jeśli najedziemy na div zmieni kolor na lightgreen
})
hoverDiv.addEventListener('mouseout', () => {
	hoverDiv.style.backgroundColor = 'lightblue'
	// jeśli zjedziemy z div zmieni kolor na lightblue
})
```

`addEventListener() `przyjmuje dwa argumenty: rodzaj zdarzenia (np. 'click', 'mouseover') i funkcję, która ma zostać wywołana, gdy zdarzenie wystąpi.

## 6. Modyfikowanie atrybutów HTML

Modyfikowanie `atrybutów` obrazka (2 sposoby):

```html
<img src="stare-zdj.png" alt="stary alt" />
```

```js
const image = document.querySelector('img')
image.addEventListener('click', () => {
	image.setAttribute('src', 'nowe-zdj.png') // Zmiana atrybutu src
	image.alt = 'nowy alt' // Zmiana atrybutu alt
})
```

## 7. Math.round, Math.ceil, Math.floor

```js
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
```

## 8. Tablice

```js
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

// Indeks tablicy zaczyna się od 0
console.log(fruits[0]) // Wyświetli 'orange'

// Wypisanie wszystkich elementów tablicy
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}

fruits.forEach(el => {
	console.log(el)
})
```
