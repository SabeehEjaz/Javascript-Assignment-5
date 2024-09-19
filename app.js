//                     Chapter 10

// Q1
// var city = "Karachi";
// if (city === "Karachi") { 
//     console.log("The City of Lights");
// }

// Q2
// var x = 5; 
// var y = 5; 

// if (x === y) {
//     var z = prompt("Enter the value of z:");
//     console.log("The value of z is: " + z);
// }

// Q3
// var ZipCode = "10010";

// if (ZipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }

// Q4
// var x = 1; 

// if (x === 1) {
//     x = 10; 
// }

// console.log("The new value of x is: " + x);


                    // Chapter 11

//  Q1
//  var a = 5;
//  var b = 10;
 
//  if (a != b) {
//      console.log("a is not equal to b");
//  }

//  Q2
//  var a = 10;
// var b = 5;

// if (a >= b) {
//     console.log("a is greater than or equal to b");
// }

// Q3
// var x = 5; 
// if (x != 10) { 
//     x = 20; 
// }

// console.log("The value of x is: " + x);


// Q4
// var number1 = 5; 
// var number2 = 10; 

// if (number1 != number2) { 
//     alert("Congratulations! The numbers are unequal.");
// }


// Q5
// var userName = prompt("Please enter your first name:"); 
// var anotherName = "Alice"; 

// if (userName != anotherName) { 
//     alert("No match"); 


            // Chapter 12

// Q1

// var a = 10; 
// var b = 5;  

// if (a >= b) {
//     alert("a is greater than or equal to b.");
// } else {
//     alert("a is less than b.");
// }


// Q2
  
// function calculateGrade() {
//     var totalMarks = prompt("Enter total marks:");
//     var obtainedMarks = prompt("Enter obtained marks:");

//     totalMarks = parseFloat(totalMarks);
//     obtainedMarks = parseFloat(obtainedMarks);

//     var percentage = (obtainedMarks / totalMarks) * 100;

//     var grade;
//     if (percentage >= 90) {
//         grade = "A";
//     } else if (percentage >= 80) {
//         grade = "B";
//     } else if (percentage >= 70) {
//         grade = "C";
//     } else if (percentage >= 60) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     alert("Your percentage is: " + percentage.toFixed(2) + "%\nYour grade is: " + grade);
// }

// calculateGrade();


// Q3

// var a = 5; 
// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }


// Q4

// var city = prompt("Please enter a city:"); // Prompt user for city

// if (city === "Karachi") {
//     alert("It's Karachi!");
// } else if (city === "Lahore") {
//     alert("It's Lahore!");
// } else {
//     alert("This city is neither Karachi nor Lahore.");
// }


// Chapter 13

// Q1

// var a = 5;
// var b = 5;
// var c = "hello";
// var d = "hello";

// if (a === b && c === d) {
//     console.log("Both conditions are true.");
// }



// Q2

// var a = 5;
// var b = 10;
// var c = "hello";
// var d = "world";

// if (a === b || c !== d) {
//     console.log("At least one condition is true.");
// }


// Q3

// var name = "Hamza";
// var age = 30;

// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//     console.log("Condition is true for Hamza or Arsalan under age 60.");
// }


// Q4

// var firstNumber = 10; // Example value for the first variable
// var secondNumber = 20; // Example value for the second variable

// if (firstNumber < secondNumber || firstNumber > secondNumber) {
//     alert("The first number is either less than or greater than the second number.");
// }


// Q5

// // Declare variables for first name and last name
// var myFirstName = "John"; // Replace with your first name
// var myLastName = "Doe";   // Replace with your last name

// // Prompt user for their first and last names
// var inputFirstName = prompt("Please enter your first name:");
// var inputLastName = prompt("Please enter your last name:");


// if (inputFirstName === myFirstName && inputLastName === myLastName) {
//     alert("Welcome, " + myFirstName + " " + myLastName + "!");
// } else {
//     alert("The names do not match.");
// }


// Chapter 14

// Q1

// var password = prompt("Please enter your password:"); // Prompt for password

// if (password !== "") { 
//     if (password.length <= 5) { 
//         alert("Password must be greater than 5");
//     } else { 
//         alert("OK");
//     }
// } else {
//     alert("Password cannot be empty.");
// }


// Q2

// var a = 1;      
// var c = "Max";  

// if (a === 1) { 
//     if (c === "Max") { 
//         alert("OK"); 
//     }
// }


// Q3

// var a = 1;     
// var c = "Max";  
// if (a === 1 && c === "Max") {
//     alert("OK"); 
// }


// Q4

// var num1 = 10; 
// var num2 = 10; 

// if (num1 === num2) { 
//     if (num1 <= num2) { 
//         alert("Both conditions are true: num1 equals num2 and is less than or equal to num2.");
//     }
// }
