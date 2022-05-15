//  console.log('jestem sobie consol.logiem')
console.log()


// stara deklaracja zmiennej, obenie nie używanea w nowych projektach. 
var name = "Jan";
name = "Adam";
name = ['Jola', "Aga"]
name = true
// deklaracje zmiennych po nowemu ES6

// let 
let sName = 'Kowalski';
sName = 'Nowak'

// const

const age = '45'
// age = '70' nie możemy nadpisywać danych prymityny w const


// zminy danych w const 
// Object
const car = {
    club: "Opel"
}


// błedny zapis, zwróci błąd.
// car = {
//     club: 'Audi'  
// }

car.club = "Audi"


// zmina w const 
// Array 

const books = ['Ogniem i mieczem', "Potop"]

// tak nie mozna 
// books = ['Pan Tadeusz', 'Dziady']

// to jest porawny zapis
books[0] = "Dziady"
books[1] = 'Pan Wołodyjowski'

// typy prymitywne

// string
const mainString = 'Jan 3'
// number 
const mainNumber = 5
const mainNumberComa = 5.4
const max = Number.MAX_SAFE_INTEGER // max number 9007199254740991 2^53 − 1.
// boolean 
const prawda = true
const falsz = false

// undefined 
const niemanic = undefined

// Null
const pusty = null

// typy prymitywne koniec

// Typy złożone 

// Tablica Array
const arr = ['jan', 45, true]

const obj = {
    name: "Andrzej",
    sName: "Duda",
}

console.log(obj)  // pokaże zawrtość obj w consoli przeglądarki

console.log('2'+'2')  // wynik 22

console.log( 2 + 2 ) // wynik 4

console.log('2' + 2) // wynik 22

console.log('2' == 2) // wynik prawda

console.log('2' === 2) // wynik fałsz

console.log( 5 - 4) // wynik 1

console.log( 15 / 3) // wynik 5

console.log(2 * 8 ) // wynik 16

console.log((2+2)*4/5) // wynik 3.2

console.log( 5 % 2) // wynik 1 



for(let i = 0; i < 20; i++) {
    console.log('jestem i = ' + i)
}

const filmy = ['Rambo', 'Obcy', '365 dni', "Ranczo"]
    //  index     0        1       2          3
    // długośc tablicy 4 
for(let i = 0; i < filmy.length; i++) {
    console.log('Co sadzisz o filmie ' + filmy[i])
}


if(2 == '2') {
    console.log( 'super')
} 

if(2 === '2') {
    console.log('jak by byłą prawda')
} else {
    console.log('jak warunek nie spełniony ')
}

const numbers = [1,2,3,4,5,6,7,8,9,10, 12,44,658]
// tylko liczby parzyste z tablicy numbers
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log( 'Liczba parzysta ' + numbers[i])
    }
}
// tylko liczby większe od 5  z tablicy numbers
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 5) {
        console.log(numbers[i])
    }
}

// 14 % 3 = 4 reszty 2  

// 18 % 2 = 9 reszty 0