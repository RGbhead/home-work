console.log("Задание 1")
let age =30
console.log(age)

age=31
console.log(age)

const BirthYear=1990
console.log(BirthYear)/* let можно менять она как мне лет по типу если мне 30 то завтра мне 31
                        А const евляется как год твоего рождение она не меняется ты же не можеш по паспорту написать что ты
                        родился в 1992 году если ты родился 1990  */
console.log("Задание 2")
var name = "ALex"
console.log(name)
var name = "Aleks"
console.log(name) /* let и const ведут себя одинаково по отношению к лексическому окружению, области видимости.
                    Но var – это совершенно другой зверь, берущий своё начало с давних времён. 
                    Обычно var не используется в современных скриптах, но всё ещё может скрываться в старых. */

console.log("Задание 3")  //В JavaScript существует несколько основных типов данных По типу 
let numberVar = 42;       //Number Единый тип число используется как для целых, так и для дробных чисел       
let stringVar = "Hello, world!";   //string В JavaScript одинарные и двойные кавычки равноправны. Можно использовать или те или другие
let booleanVar = true;  // boolean У него всего два значения: true (истина) и false (ложь)         
let nullVar = null;     // Значение null не относится ни к одному из типов выше, а образует свой отдельный тип, состоящий из единственного значения
let undefinedVar;       // Значение undefined, как и null, образует свой собственный тип, состоящий из одного этого значения Оно имеет смысл «значение не присвоено            
let nanVar = NaN;       /*Существуют специальные числовые значения Infinity (бесконечность) и NaN (ошибка вычислений)
                        Ошибка вычислений NaN будет результатом некорректной математической операции, например:
                        alert( "нечисло" * 2 ); NaN, ошибка */       
console.log("numberVar:", numberVar, "Type:", typeof numberVar); /*typeof Оператор возвращает тип аргумента
                                                                У него есть два синтаксиса: со скобками и без:*/
console.log("stringVar:", stringVar, "Type:", typeof stringVar);
console.log("booleanVar:", booleanVar, "Type:", typeof booleanVar);
console.log("nullVar:", nullVar, "Type:", typeof nullVar);
console.log("undefinedVar:", undefinedVar, "Type:", typeof undefinedVar);
console.log("nanVar:", nanVar, "Type:", typeof nanVar);


console.log("Задание 4")
let stringNum = 123;
let convertedNumber = Number(stringNum); 
console.log("Строка в число:", convertedNumber, "Тип:", typeof convertedNumber);

let numberValue = 456;
let convertedString = String(numberValue); 
console.log("Число в строку:", convertedString, "Тип:", typeof convertedString);

let undefinedValue;
let undefinedString = String(undefinedValue); 
let undefinedNumber = Number(undefinedValue); 
console.log("undefined в строку:", undefinedString, "Тип:", typeof undefinedString);
console.log("undefined в число:", undefinedNumber, "Тип:", typeof undefinedNumber);

let nullValue = null;
let nullString = String(nullValue); 
let nullNumber = Number(nullValue); 
console.log("null в строку:", nullString, "Тип:", typeof nullString);
console.log("null в число:", nullNumber, "Тип:", typeof nullNumber);

console.log("Задание 5")
let dynamicVar = 100; 
console.log("Начальное значение:", dynamicVar, "Тип:", typeof dynamicVar);


dynamicVar = "Теперь это строка"; 
console.log("Новое значение:", dynamicVar, "Тип:", typeof dynamicVar);

console.log("Задание 6") /* Функция prompt принимает два аргумента 
                        Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена*/ 
let userName = prompt("Введите ваше имя:");

let userAge = prompt("Введите ваш возраст:");


console.log("Имя пользователя:", userName);
console.log("Возраст пользователя:", userAge);