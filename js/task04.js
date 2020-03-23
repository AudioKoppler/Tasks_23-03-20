/* var inputArray = [1, 2, 3, 4];

var largest = Math.max(...inputArray);

console.log(largest);
console.log(inputArray);

inputArray.push(20); */


var inputArray = []; // define our array
var largest = Math.max(...inputArray);

function biggestNumber() {

    for (var i = 0; i < 3; i++) { // loop 10 times
        inputArray.push(prompt('Enter Number ' + (i + 1))); // push the value into the array
    }
    inputArray.join(', ')

    alert('Full array: ' + inputArray.join(', ')); // alert the results

};
console.log(inputArray);
console.log(inputArray.join(', '));
console.log(largest);