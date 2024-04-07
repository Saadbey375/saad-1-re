//1. A js program to find the maximum between two numbers.

/*
let num1 = prompt("enter num1");
let num2 = prompt("enter num2");
if (num1 > num2) {
    alert(`${num1} is max`)
    
} else if (num1 == num2) {
    alert(`both are equal`)
} else {
    alert(`${num2} is max`)
}  
*/ 



//2. A js program to find the maximum between three nums

/*
let num1 = prompt("enter first num");
let num2 = prompt("enter second num");
let num3 = prompt("enter third num");

if (num1 > num2 && num1 > num3) {
    alert(`${num1} is maximum`)
}

else if (num2 > num1 && num2 > num3) {
    alert(`${num2} is maximum`)   
}


else if (num3 > num1 && num3 > num2) {
    alert(`${num3} is maximum`)   
}

else if (num1 == num2 && num1 == num3) {
    alert(`All are equal`)
} 

else {
    alert(`This is not a num`)
}   

*/

//3. A js program to check whether a num is negative, positive or zero

/*
let number = prompt('Enter a number to check whether it is positive , negative or zero');

if (number > 0) {
    alert('it is a positive number')
}
else if (number < 0) {
    alert('it is a  negative number')
 }
  else {
    alert('it is a zero')  
}
*/

//4. A js program to check whether a number is divisible by 5 and 11 or not
/*

let number = prompt('Enter a number to check whether it is divisible by 5 and 11 or not');

if (number % 5 == 0 && number % 11 == 0) {
    alert('Yes! it is divisible by 5 and 11.')
}
  else {
    alert("No! it can't be divisible by 5 and 11.")  
}
*/


//5. A js program to check whether a number is even or odd.
/*

let number = prompt('Enter a number to check whether it is even or odd');

if (number % 2 == 0) {
    alert('it is a even number')
}
else if (number < 0) {
    alert('it is a  negative number')
 }
  else {
    alert('it is a odd number')  
}

*/



/*
//6. Write a js program to check whether a year is leap year or not.
const yearToCheck = prompt('enter year to check');

// Leap years are divisible by 4
// Except if they are divisible by 100
// Unless they are also divisible by 400
if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || (yearToCheck % 400 === 0)) {
    console.log(yearToCheck + ' is a leap year.');
} else {
    console.log(yearToCheck + ' is not a leap year.');
}
*/


/*
//7.   Write a js program to input any alphabet and check whether it is vowel or consonant

var alphabet = prompt(' enter alphbaet');
    // Checking
    if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u') {
        console.log(alphabet + ' is a vowel.');
    } else {
        console.log(alphabet + ' is a consonant.');
    }


*/


/*
//8. Write a js program to check whether a character is uppercase or lowercase alphabet

const character = prompt("enter a character");

// Check
if (character === character.toUpperCase()) {
    console.log(character + ' is an uppercase alphabet.');
} else if (character === character.toLowerCase()) { // Check if the character is lowercase
    console.log(character + ' is a lowercase alphabet.');
} else {
    console.log('Please enter an alphabet character.');
}
*/



//9.   Write a js program to input the week number and print weekday
/*
const weekNumber = prompt("Enter the week number (1-7):");

if (weekNumber >= 1 && weekNumber <= 7) {
    // Array of weekdays
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // Print the weekday corresponding to the week number
    console.log("Weekday for week " + weekNumber + " is " + weekdays[weekNumber - 1]);
} else {
    console.log("Please enter a valid week number between 1 and 7.");
}
*/



//10.   Write a js program to input the month number and print the number of days in that month

/*
const monthNumber = parseInt(prompt("Enter the month number (1-12):"));

let daysInMonth;

if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
    daysInMonth = 31;
} else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
    daysInMonth = 30;
} else if (monthNumber === 2) {
    daysInMonth = 28; 
} else {
    console.log("Please enter a valid month number between 1 and 12.");
}
console.log("Number of days in month " + monthNumber + " is " + daysInMonth);
*/



/*
//11.Write a js program to input marks of five subjects Physics, Chemistry,
Biology, Mathematics, and Computer. Calculate percentage and grade
according to the following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
*/
/*
const physics = prompt("Enter Physics marks:");
const chemistry = prompt("Enter Chemistry marks:");
const biology = prompt("Enter Biology marks:");
const mathematics = prompt("Enter Mathematics marks:");
const computer = prompt("Enter Computer marks:");
// Calculate total marks
const totalMarks = physics + chemistry + biology + mathematics + computer;
// Calculate percentage
const percentage = (totalMarks / 500) * 100;
// Determine grade based on percentage
let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}
console.log("Total marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
*/



/*
13. Write a js program to input the basic salary of an employee and calculate
its Gross salary according to the following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%

*/
/*
const basicSalary = parseFloat(prompt("Enter the basic salary of the employee:"));

let hra, da;
if (basicSalary <= 10000) {
    hra = basicSalary * 0.2;
    da = basicSalary * 0.8;
} else if (basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.9;
} else {
    hra = basicSalary * 0.3;
    da = basicSalary * 0.95;
}
const grossSalary = basicSalary + hra + da;
console.log("Basic Salary:", basicSalary);
console.log("HRA:", hra);
console.log("DA:", da);
console.log("Gross Salary:", grossSalary);
*/



/*
14. Write a js program to input electricity unit charges and calculate total
electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill
*/
/*
const units = parseInt(prompt("Enter the number of electricity units consumed:"));
let totalBill;
    if (units <= 50) {
        totalBill = units * 0.5;
    } else if (units <= 150) {
        totalBill = ((units) * 0.75);
    } else if (units <= 250) {
        totalBill = ((units) * 1.20);
    } else {
        totalBill = ((units) * 1.50);
    }
    totalBill = totalBill + totalBill*0.2;

    console.log("Total bill:", totalBill);
*/








