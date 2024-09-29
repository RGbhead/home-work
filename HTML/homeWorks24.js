// Задание 1 //
let Num = prompt("Напишите Число")

if (Num > 10){
    console.log ("Число больше 10")
}
else{
    console.log ("Число меньше или равно 10")
}
// Задание 2 //
let dele = confirm("хотите ли вы удалить файл")

if (dele){
    console.log("Файл удален")
}else{
    console.log("Удаление отменено")
}
// Задание 3 //
let years = prompt("Сколько вам Лет")

if (years<18){
    console.log("Вы еще подросток")
}else if(years >= 18 && years <= 30){
    console.log ("Вы молодой взрослый")
}
else if (years > 30){
    console.log("Вы взрослый")
}
// Задание 4 //
let number = prompt("Введите число:");
if (number % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}
// Задание 5 //
let day = prompt("Введите номер дня недели (от 1 до 7):");
day = Number(day);
switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Некорректное значение");
}
// Задание 6 //
let firstNumber = prompt("Введите первое число:");
let secondNumber = prompt("Введите второе число:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (firstNumber === secondNumber) {
    console.log("Числа равны");
} else {
    
    const result = (firstNumber > secondNumber) 
    console.log(result);
}

// Задание 7 //
function getSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Лето";
        case 9:
        case 10:
        case 11:
            return "Осень";
        default:
            return "Некорректный номер месяца. Пожалуйста, введите число от 1 до 12.";
    }
}
const month = parseInt(prompt("Введите номер месяца (от 1 до 12):"), 10);
const season = getSeason(month);
alert(season);
