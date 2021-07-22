// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A variable "name" is created and the value of "Dane" is assigned to it
// Next the variable "name" is checked to see if it is equal to the value "Mary"
// If the variable "name" were assigned the value of "Mary" the console would log
//"Hi, Mary!". Becuase the variable "name" does not have the value of "Mary" assigned
//to it, the console logs "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// The variable "secret" is created. The variable "code" is created and the
// value of 123 is assigned to it. Then the variable "code" is checked to see
// if it has been assigned the value of 123. Becuase it has, the variable "secret"
// is assigned the value of "super" and the variable "code" is multiplied by two,
// making it's assigned value 246. The variable "code" is then checked for being
// less than 250, because it's assigned value is 246, the variable "secret" is not
// assigned the value of "duper" and the console logs the assigned value of "secret"
// which is "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//Three variables are created, isStudent, age and zip, and are assigned values
//of true, 34 and 55407 respectively. First variable isStudent is checked to have
//the assigned value of true, then zip is checked to have an assigned value
//greater than 34. If both of these were true, console would log 'You're a student
//on the West Coast!` since only isStudent is true the code checks if isStudent
//is assigned the value of false or if age is less than 30. Since neither of those
//is true the console does not log "What are your hobbies?" and moves on. Next
//isStudent is checked for having the value of true assigned to it. Because
//it has been assigned the value of true, the code logs "Welcome to Prime" and
//does not log "How about the weather".

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - colorOne is set to 'red' instead of 'blue' and colorTwo is set to 'blue'
//instead of 'red'. Additionally only colorOne is assigned the value of 'purple'
//after mix is confirmed to be true. Another line would need to be added within
//the if statement that reads:
//colorTwo = 'purple';

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - this code is checking if temp is greater than 39 OR time is >= 4. To
//check both variables the "||" operator needs to be changed to "&&"

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - this code checks if minAge is less than or equal to age with <=. A "<"
//symbol is needed to make sure the age is less than 21, otherwise the age of
//21 would be excluded.


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
