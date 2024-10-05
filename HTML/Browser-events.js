// Задание 2
document.getElementById('jsButton').addEventListener('click', function() {
    console.log('Событие обработано через JS');
});

// Задание 3
const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', function() {
    myDiv.style.backgroundColor = 'blue';
});

myDiv.addEventListener('mouseover', function() {
    console.log('Элемент нажат');
});

// Задание 4
document.getElementById('textInput').addEventListener('keypress', function(event) {
    console.log(event.target.value);
});

// Задание 5
document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Переход по ссылке отменен');
});

// Задание 6
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// Задание 7
document.getElementById('keyboardInput').addEventListener('keydown', function(event) {
    console.log('Код нажатой клавиши:', event.keyCode);
});