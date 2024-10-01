// Задание 1
let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits);
// Задание 2
fruits.push("Paer")
console.log(fruits);
// Задание 3
let lastFruit = fruits.pop()
let firstFruit = fruits.shift()
console.log(lastFruit);
console.log(firstFruit);
console.log(fruits);
// Задание 4
fruits.forEach(function(fruit) {
        console.log(fruit)
    })
    // Задание 5
let lengths = fruits.map(fruit => fruit.length);

console.log(lengths);
// Задание 6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Numbers = numbers.filter(num => num % 2 === 0)
console.log(Numbers);
// Задание 7
let sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum);
// Задание 8
let firstNumberFive = numbers.find(number => number > 5)
console.log(firstNumberFive);
// Задание 9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = arr1.concat(arr2)
console.log(arr3);
// Задание 10 
let fruits2 = ["Apple", "Banana", "Cherry", "Orange", "Peach"];

let hasBanana = fruits2.includes("Banana");

console.log(hasBanana);

fruits2.reverse()
console.log(fruits2);