'use strict';

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and concatenates a message using the arguments passed into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.

For TODO item, be sure to change it to say DONE when you have successfully completed the task*/

// TODO: Write your code here
function sum(a,b){ //eslint-disable-line
  var theSum = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum + '.';
  return [theSum, message];
}

// TODO: Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments passed into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// TODO: Write your code here
function multiply(a,b){
  
  var theProduct = a * b;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + theProduct + '.';
  return [theProduct, message]
}

// TODO: Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and concatenates messages using the arguments that were passed into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// TODO: Write your code here
function sumAndMultiply(a,b,c){ 

  var sumAB = sum (a, b);
  var finalSum = sum (sumAB[0], c);
  var prodAB = multiply (a, b);
  var finalProd = multiply (prodAB[0], c);
  var sumMesg = a + ' and ' + b + ' and ' +  c + ' sum to ' + finalSum[0] + '.';
  var prodMesg = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + finalProd[0] + '.'; 

  return[finalSum, finalProd, sumMesg, prodMesg]
}

// TODO: Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// TODO: Write your code here
var testArray = [2,3,4]; //eslint-disable-line


function sumArray(testArray){ 

  var sumsArray = [0];
  var q4list = [];

  for(var i = 0; i < testArray.length; i++) {
    var arraySum = sum (testArray[i], sumsArray[i]);
    sumsArray.push(arraySum[0]);
    if (i > 0) {
      q4list = q4list + ',' + testArray[i];
    }
  }
  
  console.log(q4list);

  var q4Msg = testArray [0] + q4list + ' was passed in as an array of numbers, and ' + arraySum[0] + ' is their sum.'

  console.log (q4Msg);

  return[arraySum[0], q4Msg];
}

// TODO: Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ 
  var prodsArray = [1];
  var q5list = [];

  for(var i = 0; i < testArray.length; i++) {
    var arrayProd = multiply (testArray[i], prodsArray[i]);
    prodsArray.push(arrayProd[0]);
    if (i > 0) {
      q5list = q5list + ',' + testArray[i];
    }
  }
  
  console.log(q5list);

  var q5Msg = 'The numbers ' + testArray [0] + q5list + ' have a product of ' + arrayProd[0] + '.';

  console.log (q5Msg);

  return[arrayProd[0], q5Msg];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
