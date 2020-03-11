'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
//eslint-disable-line
function sum(a, b) { 
    var sum = a + b;
    // var result = [];
    // result.push(sum); 
   // console.log(sum);
   //console.log(result);
    // result.push(`The sum of ${a} and ${b} is ${sum}.`);
    return[sum,`The sum of ${a} and ${b} is ${sum}.`];
    // return result;
    //return sum; // because will call test of the function 
//    result.push(`the sum of ${a} + ${b} is ${sum}`);
//    return[sum ,`the sum of ${a} + ${b} is ${sum}`];
//    return[sum,"the result is 11 "] // advance or maybe another stu dont understand it easly 
} // end function sum

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////

