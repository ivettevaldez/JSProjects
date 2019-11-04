// // Console.
// console.log('Hello World!');
// console.error('This is an error');
// console.warn('This is an warning');

// // Constatns and variables.
// const age = 30; // Can't change.
// console.log(age);
// age = 31; // Error.

// let score;  // Can change and be declared without an initial value.
// score = 10;
// console.log(score);
// score = 20;
// console.log(score);

// // Datatypes: String, Numbers, Boolean, null, undefined, Symbol.
// const name = 'Maria';
// const age = 28;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // Also undefined.

// console.log(typeof name);

// // String concatenation.
// console.log('My name is ' + name + ' and I am ' + age);

// // Template String.
// console.log(`My name is ${name} and I am ${age}`);

// // Strings.
// const s = 'Hello World';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(' '));

// // Arrays.
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(fruits);
// console.log('Fruits is an array: ' + Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

// // Objects
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 Main St.',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.email = 'johndoe@gmail.com'

// console.log(person);

// const { firstName, lastName, address: { city }} = person;

// console.log(city);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     },
// ]

// console.log(todos);

// // JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// // For.
// for(let i = 0; i < 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// for(let todo of todos) {
//     console.log(todo.text);
// }

// // While.
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// // ForEach, Map, Filter.
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text
// });

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

// // Conditionals.
// const x = 6;
// const y = 11;

// if (x > 10) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10');
// }

// if (x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }

// // Ternary operator.
// const color = x < 10 ? 'red' : 'blue';

// // Switch.
// switch(color) {
//     case 'red': 
//         console.log('color is red');
//         break;

//     case 'blue':
//         console.log('color is blue');
//         break;

//     default: 
//         console.log('color is NOT red or blue')
// }

// // Functions.
// function addNumbers1(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }
// const addNumbers2 = (num1 = 1, num2 = 1) => num1 + num2;

// const addNumbers3 = num1 => num1 + 5;

// console.log(addNumbers2(5, 5));
// console.log(addNumbers3(5));

// todos.forEach((todo) => console.log(todo)); 

// // Constructor function.
// function Person(firstName, lastName, dateOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dateOfBirth = new Date(dateOfBirth);
// }

// // Prototypes.
// Person.prototype.getBirthYear = function() {
//     return this.dateOfBirth.getBirthYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Class.
// class Person {
//     constructor(firstName, lastName, dateOfBirth) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dateOfBirth = new Date(dateOfBirth);
//     }

//     getBirthYear() {
//         return this.dateOfBirth.getBirthYear();        
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate objects.
// const person1 = new Person('Maria', 'Lopez', '4-3-1980');
// const person2 = new Person('John', 'Doe', '5-6-1990');
// const person3 = new Person('Ivette', 'Valdez', '6-6-1900');

// console.log(person1.getFullName());
// console.log(person2.getBirthYear());
// console.log(person1);

// // DOM.
// console.log(window);
// window.alert(1);

// // Single element selection.
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));

// // Multiple element selection.
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const item = document.querySelectorAll('.item');
// item.forEach((item) => console.log(item));

// // Change things.
// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Ivette';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// // ul.lastElementChild.remove();
// // ul.remove();

// // Events.
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);

//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// Form functionality.
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields.
        nameInput.value = '';
        emailInput.value = '';
    }
}