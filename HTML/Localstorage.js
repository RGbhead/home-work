// Задание 1
// Сохранение строки
localStorage.setItem('greeting', 'Привет, мир!');

// проверяет сохранение
const greeting = localStorage.getItem('greeting');
console.log(greeting);
// Задание 2
// Удаление ключ greting
localStorage.removeItem('greeting');

// Проверяет удаления
const removedGreeting = localStorage.getItem('greeting');
console.log(removedGreeting);
// Задание 3
// Пользователь 
const user = {
    name: 'Олег',
    age: 19
};

// Сохранение объекта в LocalStorage
localStorage.setItem('user', JSON.stringify(user));

// Извлечяет обьект
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);
// Задание 4
let userData = JSON.parse(localStorage.getItem('user'));

// Добавляет новый ключ
userData.country = 'Казакстан';

localStorage.setItem('user', JSON.stringify(userData));

const updatedUser = JSON.parse(localStorage.getItem('user'));
console.log(updatedUser);
// Задание 5
if (localStorage.getItem('user')) {
    const existingUser = JSON.parse(localStorage.getItem('user'));
    console.log(existingUser);
} else {
    const newUser = { name: 'Петр', age: 25 };
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('Создан новый пользователь:', newUser);
}
// Задание 6
localStorage.clear();

console.log(localStorage.getItem('user'));
// Задание 7
// Создание массива задач
const tasks = [
    { title: 'Задача 1', completed: false },
    { title: 'Задача 2', completed: false }
];

localStorage.setItem('tasks', JSON.stringify(tasks));

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(storedTasks);
// Задание 8
let storedTasksArray = JSON.parse(localStorage.getItem('tasks'));

storedTasksArray[0].completed = true;
localStorage.setItem('tasks', JSON.stringify(storedTasksArray));


const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(updatedTasks);