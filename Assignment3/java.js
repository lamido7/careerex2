let name = "lamido";
let age = 27;
let nationality = "Japanese";
let introduction = `Hello, my name is ${name}, I am ${age} years old and I am ${nationality}.`;
console.log(introduction);

let qoute = `I'm usually homeboys with the same niggas I'm rhymin' with
But this is hip-hop, and them niggas should know what time it is
And that goes for Jermaine Cole, Big K.R.I.T., Wale
Pusha T, Meek Millz, A$AP Rocky, Drake
Big Sean, Jay Electron', Tyler, Mac Miller
I got love for you all, but I'm tryna murder you niggas
Tryna make sure your core fans never heard of you niggas
They don't wanna hear not one more noun or verb from you niggas
What is competition? I'm tryna raise the bar high'`


console.log(qoute.toUpperCase());
console.log(qoute.toLowerCase());

let word = "hello";
let reversedWord = word.split('').reverse().join('');
console.log("Reversed word:", reversedWord);

let item1 = 50
let item2 = 70
let item3 = 30
let total = item1 + item2 + item3
console.log(`The total price of the items is $${total}`);

let score1 = 54
let score2 = 67
let score3 = 43
let score4 = 90
let score5 = 78
let average = (score1 + score2 + score3 + score4 + score5) / 5
console.log(`The average score is ${average}`);

let favFood = ['Rice', "Vegetable Soup", "Fish", "Salad"]
console.log(favFood[0]);
console.log(favFood[favFood.length-1]);
favFood.push("Plantain")
favFood.unshift('Tuwo')
console.log(favFood)

