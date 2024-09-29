// Задание 1
function greet(){
    console.log("Привет Мир")
}
greet()
// Задание 2
function sayHello(name) {
    console.log(`Привет, ${name}!`);
}

sayHello("Анна");
sayHello("Иван");
sayHello("Ольга");
// Задание 3
function sun(a,b){
    return a + b
}
const result = (sun(3, 5))
console.log(result)
// Задание 4
function isEven(num){
    return num % 2 === 0
}
console.log(isEven(4))
console.log(isEven(7))
console.log(isEven(0))
// Задание 5
function max(a,b){
    if (a>b){
        return a
    }else if (b>a){
        return b
    }else{
        return "Число Равны"
    }
}
console.log(max(5,10))
console.log(max(20,20))
// Задание 6
function getInitials(firstname, lastname){
    return `${firstname[0]}.${lastname[0]}.`
}

console.log(getInitials("Алиас", "Боброва"))
console.log(getInitials("Иван","Иванов"))
// Задание 7
function square(num){
    return num*num
}
function cube(num){
    return square (num) * num
}
console.log (cube(3))
console.log (cube(2))
// Задание 8
const sum =(a,b)=>a+b
const result2=sum(3,5)
console.log(result2)
// Дополнительный Задание
function getFactorial(num){
    if (num <= 1) return 1
    return num * getFactorial(num-1)
}
console.log(getFactorial(5))
console.log(getFactorial(0))