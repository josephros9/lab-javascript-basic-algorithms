// Iteration 1: Names and Input
const driver = "Joseph";
const navigator = "Sergio";


console.log("The driver's name is " + driver);
console.log(`The driver's name is ${driver}`);
console.log("The navigator's name is " + navigator);
console.log(`The navigator's name is ${navigator}`);



// Iteration 2: Conditionals
const driver = "Joseph";
const navigator = "Sergio";


if(driver.length > navigator.length){
    console.log(`The driver has the longest name, it has ${driver.length} characters`);
  } else if(navigator.length > driver.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`);
  } else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops

const driver = "Joseph";
const navigator = "Sergio";

let reverseNav = ""
for(let i = navigator.length -1; i >= 0; i--){
   reverseNav += navigator[i];
}
console.log(reverseNav);
