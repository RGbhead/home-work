// Задание 1 //
let a = 10
let b = 5
let c = 2
console.log (a+b+c)
console.log ((a+c)-b)
console.log ((a*b)/c)
console.log (a%b)
// Задание 2 // 
let x = 7
console.log (x++ + ++x)
console.log (x-- - --x)
// Задание 3 //
let a2 = 4
let b2 = 5
let sum = a2 + b2
let result ="The Rusult it:" + sum
console.log(result)
// Задание 4 //
let a3 = 5
let b3 = 4
let c3 = 2
console.log((a3>b3)>0)
console.log(c3 == 2)
console.log((a3/c3)!=5)
// Задание 5 //
let num = 10
let text = "10"
console.log(num == text) // true
console.log(num === text) // false
/* В этом коде первое сравнение с == вернёт true, потому что этот оператор не учитывает типы данных
Второе сравнение с === вернёт false, так как здесь учитывается как значение, так и тип данных */
// Задание 6 //
let x1 = 6
console.log (x1 % 2 === 0 || x1 % 3 === 0) && x1 % 6 !== 0
let y1 = 11
console.log (y1 <= 10 && y1 >= 5)