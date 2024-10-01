// Задание 1
let person = {
    name:"Aleks",
    age:20,
    city:"NewYork"
}
console.log(person)
// Задание 2 
let person2 = {
    name:"Aleks",
    age:20,
    city:"Paris"
}
console.log(person2)
// Задание 3 
const person3 ={
    name:"Dima",
    age:30,

    greet:function(){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
    }
}
person3.greet()
// Задание 4
const obj1 ={a:10,b:20}
const obj2 ={a:10,b:20}
console.log(obj1==obj2)
console.log(obj1===obj2) /* Тут легко obj1 и obj2 это два разных объекта даже если у них одинаковые свойство значение 
                        и операторы == и === случае объекты работает одинакова Обе операторы сравнивают ссылки на объект
                        а не их содержимое посколько obj1 и obj2 это два разные объекты в памяти оба сравнение возрощают
                        в False */
// Задание 5 
const book = {
    title: "Война и мир",
    author: "Лев Толстой",
    details: {
        year: 1869,
        pages: 1225
    }
};
const CopyBook=Object.assign({}, book)

CopyBook.details.year=2023
console.log(book.details.year)
console.log(CopyBook.details.year) /*Object.assign({}, book) создает поверхностную (shallow) копию объекта book Это 
                        означает что новый объект copiedBook получает ссылки на те же вложенные объекты что и оригинал.*/
// Задание 6
const Calculator ={
    a:10,
    b:5,

    sum:function(){
        return this.a + this.b
    },
    multiply:function(){
        return this.a * this.b
    }
}
console.log ('Сумма',Calculator.sum()) 
console.log ('Произведение', Calculator.multiply())
// Задание 7
const car ={
    brand:"Mclaren",
    model:"F1 1993"
}
car.model = "1997 F1 GT"
console.log(car) /* Использование const Объевление объкета что ссылка на этот объект не может быть изменена
                т.е вы не можете сделать что-то вроде car = {...} что бы заменить весь объект
                2)Однако свойство объекта объевленного с const могут быть изменены Это связоны с тем что 
                const защищает саму переменную от переназначение но не защищает её содержимое 
                таким оброзом мы можем изменять свойсто объекта так как они все еще находятся 
                в пределах того же объекта на который указевает переменная  */