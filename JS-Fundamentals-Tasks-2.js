/* 
 * Functions
 * Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'                                                
 * Call this function 3 times,with input data for 3 different countries.Store the returned values in 3 different variables, and log them to the console
*/
console.log("* Functions\n");
function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Romania", 19, "Bucharest"));
console.log(describeCountry("Serbia", 6, "Belgrade"));
console.log(describeCountry("Ukraine", 38, "Kyiv"));
console.log(describeCountry("Moldova", 2, "Chisinau"));

/* 
 * Function Declarations vs. Expressions
 * The world population is 7900 million people.Create Function Declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population                                                
 * To calculate the percentage, divide the given population value by 7900 and then multiply by 100                                                 
 * Call 'percentageOfWorld1' for 3 populations of countries your choice, store the results into variables, and log them to the console                                        
 * Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/
console.log("\n* Function Declarations vs. Expressions\n");

function printResults(country, percentage) {
	console.log(`The population of ${country} represents ${percentage.toFixed(2)}% of the world population.`);
}

console.log("Using Function Declaration");
function percentageOfWorld1(population) {
	const WORLD_POPULATION = 7900;
	let percentage;

	percentage = (population / WORLD_POPULATION) * 100;

	return percentage;
}

printResults("Romania", percentageOfWorld1(19));
printResults("Ukraine", percentageOfWorld1(38));
printResults("Serbia", percentageOfWorld1(6));

console.log("\n");
console.log("Using Function Expression");
const percentageOfWorld2 = function (population) {
	const WORLD_POPULATION = 7900;
	let percentage;

	percentage = (population / WORLD_POPULATION) * 100;

	return percentage;
}

printResults("Romania", percentageOfWorld2(19));
printResults("Ukraine", percentageOfWorld2(38));
printResults("Serbia", percentageOfWorld2(6));

/*
 * Arrow function
 * Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

console.log("\n");
console.log("* Arrow Functions\n");

const percentageOfWorld3 = (population) => {
	const WORLD_POPULATION = 7900;
	let percentage;

	percentage = (population / WORLD_POPULATION) * 100;

	return percentage;
}

printResults("Romania", percentageOfWorld3(19));
printResults("Ukraine", percentageOfWorld3(38));
printResults("Serbia", percentageOfWorld3(6));

/*
	* Functions Calling Other Functions
	* Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'                                                
	* To calculate the percentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier                                                 
	* Call 'describePopulation' with data for 3 countries your choice
*/

console.log("\n* Functions calling other functions\n");

function describePopulation(country, population) {
	return printResults(country, population);
}

describePopulation("Romania", percentageOfWorld3(19));
describePopulation("Ukraine", percentageOfWorld3(38));
describePopulation("Moldova", percentageOfWorld3(2));

/*
	* === Introduction to Array ===
	* Create an array containing 4 population values of 4 countries yourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'                                                 
	* Log to the console whether the array has 4 elements or not (true or false)         
	* Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values             
*/

console.log("\n* Introduction to arrays\n");
const populations = new Array(2, 6, 19, 38);
console.log(populations.length === 4 ? true : false);

const percentages = new Array();
for (const elem of populations) {
	percentages.push(+percentageOfWorld1(elem).toFixed(2));
}
console.log(percentages);

/*
 * === Basic Array Operations (Methods) ===
 * Create an array containing all the neighbouring countries of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'                                        
 * At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array                
 * Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array                                                
 * If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'                                         
 * Change the name of one of your neighbouring countries.To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.   
*/

console.log("\n* Basic Array Operations\n");

const neighbours = new Array("Bulgaria", "Ukraine", "Serbia", "Moldova", "Hugary");
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) console.log('Probably not a central European country :D');
neighbours[3] = "Republic of Moldova"

/*
 * === Iteration: The for Loop ===
 *There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting' 
*/

console.log("\n* Iteration: The for Loop\n");
for (let i = 1; i < 51; i++) {
	console.log(`Voter number ${i} is currently voting`);
}
/*
 -> Already done at === Introduction to Array ===
 * === Looping Arrays, Breaking and Continuing ===
 *Let's bring back the 'populations' array from a previous assignment                
 *Use a for loop to compute an array called 'percentages2 'containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier                                
 *Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is.     
*/

/*
 * Looping Backwards and Loops in Loops
 * Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];                                        
 * Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country                        
 * You will need a loop inside a loop for this.This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/
console.log("\n* Looping Backwards and Loops in Loops\n");
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];
for (let i = 0; i < listOfNeighbours.length; i++) {
	for (let j = 0; j < listOfNeighbours[i].length; j++) {
		console.log(listOfNeighbours[i][j]);
	}
}

/*
 * The while Loop                                
 * Recreate the challenge from the 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')                                
 * Reflect on what solution you like better for this task: the for loop or the while loop?
*/

console.log("\n* The while loop\n");
let percentages3 = new Array();
let counter = 0;
while (counter < populations.length) {
	percentages3.push(+percentageOfWorld1(populations[counter]).toFixed(2));
	counter++;
}
console.log(percentages3);

/*
 * === Introduction to Objects ===
 * Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
	country: "Romania",
	capital: "Bucharest",
	language: "Romanian",
	population: 19_604_258,
	neighbours: new Array("Bulgaria", "Ukraine", "Serbia", "Moldova", "Hugary"),
	describe: function () {
		console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
	},
	isIsland: function () {
		return this.neighbours.length === 0 ? true : false
	}
}

console.log(myCountry);

/*
 * Dot vs. Bracket Notation                                
 * Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'        
 * Increase the country 's population by two million using dot notation,and then decrease it by two million using brackets notation.
*/

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population += 2_000_000;
myCountry['population'] -= 2_000_000;

/*
 * Object Methods                        
 * Add a method called 'describe' to the 'myCountry’ object.This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.                                
 * Call the 'describe' method                                                
 * Add a method called 'checkIsland' to the 'myCountry' object.This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

myCountry.describe();
console.log(myCountry.isIsland());