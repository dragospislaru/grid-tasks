/**
 * Prototypes
 * Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
 * Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
 */

let head = {
	glasses: 1
};

let table = {
	pen: 3
};

let bed = {
	sheet: 1,
	pillow: 2
};

let pockets = {
	money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log('\n* Assigning properties using __proto__\n');
console.log(`pockets.pen: ${pockets.pen}, should be 3`);
console.log(`bed.glasses: ${bed.glasses}, should be 1`);

let animal = {
	eat() {
		this.full = true;
	}
};

let rabbit = {
	__proto__: animal
};

rabbit.eat()
// The 'this' keyword will refer to the 'rabbit' object so it will receive the 'full' property.

/**
 * Classes
 * Task 1. The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.
function Clock({ template }) {

		let timer;

		function render() {

		 let date = new Date();

			let hours = date.getHours();

		 if (hours < 10) hours = '0' + hours;

			let mins = date.getMinutes();

		 if (mins < 10) mins = '0' + mins;

			let secs = date.getSeconds();

		 if (secs < 10) secs = '0' + secs;

			let output = template

			 .replace('h', hours)

			 .replace('m', mins)

			 .replace('s', secs);

			console.log(output);

	 }

		this.stop = function() {

		 clearInterval(timer);

	 };

		this.start = function() {

		 render();

		 timer = setInterval(render, 1000);

	 };

	}

	let clock = new Clock({template: 'h:m:s'});

 clock.start();
 */
class Clock {
	constructor({ template }) {
		this.template = template;
		this.timer = null;
	};

	render() {
		let date = new Date();
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		const output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}
let clock = new Clock({ template: 'h:m:s' });
// clock.start()

// Remember to kill the process

/**
 * Objects
 * Task 1
 * Write a function count(obj) that returns the number of properties in the object:
let user = {
	name: 'John',
	age: 30
};
*/


console.log("\n* Objects");
let user = {
	name: 'John',
	age: 30,
};

function count(obj) {
	return Object.keys(obj).length;
}

console.log('\nObjects Task 1\n');
console.log(`Number of properties: ${count(user)}`); // 2

/**
 * Task 2.
 * There is a salaries object with arbitrary number of salaries.
 * Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
 * If salaries is empty, then the result must be 0.

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};
*/

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function sumSalaries(obj) {
	return Object.values(obj).reduce((sum, value) => sum + value, 0)
}

console.log('\nObjects Task 2\n');
console.log(sumSalaries(salaries)); // 650

/**
 * Destructuring assignment
	Task 1.
	We have an object:
	let user = {
		name: "John",
		years: 30
	};

	Write the destructuring assignment that reads:
	 name property into the variable name. 
	 years property into the variable age.
	 isAdmin property into the variable isAdmin (false, if no such property)
 */
console.log('\n* Destructuring assignment\n');
let newUser = {
	name: "John",
	years: 30
};

const { name, years: age, isAdmin = false } = newUser;
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

/**
 * Task 1.
 * Let arr be an array.
 * Create a function unique(arr) that should return an array with unique items of arr.
 * For instance:

function unique(arr) {
	== your code ==
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type.
P.P.S. Use Set to store unique values.
*/

console.log('\n* Map and Set\n');
console.log('Task 1\n');

function unique(arr) {
	return new Set(arr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values)); // Hare, Krishna, :-O

/**
 * Task 2.
 * We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
 * But that doesn’t work:
		let map = new Map();
		map.set("name", "John");
		let keys = map.keys();
		//Error: keys.push is not a function
		keys.push("more");
 * Why? How can we fix the code to make keys.push work?
 */


console.log('\nTask 2\n');
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// We can't use 'push' method as it is an array method and 'keys' method returns an iterator
// We need to first convert to an array
keys = [...keys];
keys.push('more');
console.log(keys);