/*
 * === Values and Variables ===
 * Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
 * Log their values to the console
*/

const [country, continent, romaniaPopulation] = ["Romania", "Europe", 19_604_258]
console.log("* Values and Variables\n");
console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${romaniaPopulation}\n`);

/*
 * === Data Types ===
 * Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
 * Log the types of 'isIsland', 'population', 'country' and 'language' to the console
*/

const isIsland = false;
let language;
console.log("* Data Types\n");
console.log(`Type of isIsland: ${typeof (isIsland)}\nType of language: ${typeof (language)}\n`);

/*
 * === Basic Operators ===
 * 1) If your country split in half, and each half would contain half the population, then how many people would live in each half?                                              
 * 2) Increase the population of your country by 1 and log the result the console
 * 3) Finland has a population of 6 million. Does your country have more people than Finland?
 * 4) The average population of a country is 33 million people. Does your country have less people than the average country?
 * 5) Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

console.log("* Basic Operators\n");
// Task 1
console.log(`Half of the population would be: ${romaniaPopulation / 2}`);

// Task 2
console.log(`Population increased by 1: ${romaniaPopulation + 1}`)

// Task 3 and 4 using a function
const finalandPopulation = 6_000_000;
const finlandName = "Finland";

const averagePopulation = 33_000_000;

function populationChecker(country1Population, country1Name, country2Population, country2Name) {
    if (country1Population > country2Population) {
        console.log(`${country1Name} has a larger population than ${country2Name}.`);
    } else if (country1Population < country2Population) {
        console.log(`${country2Name} has a larger population than ${country1Name}.`);
    } else {
        console.log("Both countries' populations are the same.");
    }
}

populationChecker(romaniaPopulation, country, finalandPopulation, finlandName);
populationChecker(romaniaPopulation, country, averagePopulation, "average population");

// Task 5
const description = `${country} is in ${continent}, and its ${romaniaPopulation} million people speak ${language = "Romanian"}.\n`;
console.log(description);

/* 
 * Equality Operators: == vs. ===                                
 * 1) Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
 * 2) If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)                                                 
 * 3) Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1                                                 
 * 4) Use an else block to log 'Noborders' (this block will be executed when 'numNeighbours' is 0 or any other value)                                                 
 * 5) Test the code with different values of 'numNeighbours', including 1 and 0                 
 * 6) Change ==to===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?                                                
 * 7) Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1                                        
 * 8) Reflect on why we should use the === operator and type conversion in this situation
*/


console.log("* Equality Operators: == vs. ===\n");
// const numNeighbours = prompt('How many neighbour countries does your country have?');
// Can't ask for input with prompt while using Node, only works on browsers, so I will hardcode the value in this file.
const numNeighbours = 2;

if (numNeighbours === 1){
    console.log("Only 1 border!\n");
} else if (numNeighbours > 1){
    console.log("More that one border!\n");
} else {
    console.log("No borders\n");
}

/*
 The abstract equality operator( == ) will compare for equality after doing any necessary type conversions.
 The strict equality operator ( === ) will not do any conversions and will simply return false if the types are not the same.
*/

/* 
 * === Logical Operators ===
 * 1) Comment out the previous code so the prompt doesn't get in the way
 * 2) Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.        
 * 3) Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.                        
 * 4) If yours is the right country, log as string like this: 'You should live in Portugal:)'. Ifnot, log 'Portugal does not meet your criteria :('                                        
 * 5) Your country probably does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
*/

console.log("* Logical Operators\n");

language = "Romanian";
if (romaniaPopulation <= 50000000 && !isIsland && language === "English") {
    console.log(`You should live in ${country} :)\n`);
} else {
    console.log(`${country} does not meet your criteria :(\n`);
}

/*
 ->Done from the start.
 * Strings and Template Literals                                        
 * Recreate the description  variable from the last assignment (basic operators), this time using the template literal syntax   
*/

/* 
 * Type Coversion and Coercion
*/

console.log("* Logical Operators\n");
const calc1 = '9' - '5'; // Strings are converted to numbers since it's the only available operation
const calc2 = '19' - '13' + '17'; // 19 and 13 will be converted to numbers, then 6 will be addd to the string "17"
const calc3 = '19' - '13' + 17; // same as before, but this time 17 is a number so they will add up
const calc4 = '123' < 57; // "123" will be converted to a number then compared to 57
const calc5 = 5 + 6 + '4' + 9 - 4 - 2; // (5 + 6 + '4') = '114' + 9 = '1149' - 4 = 1145 - 2 = 1143;

console.log(`${calc1}\n${calc2}\n${calc3}\n${calc4}\n${calc5}\n`);

/*
 -> Done at "Basic Operators" chapter using the "PopulationChecker" function
 * If/else statements
*/


/*
 * === The switch Statement ===
*/
console.log("* The switch Statement\n");
switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("Most number of native speakers.");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}