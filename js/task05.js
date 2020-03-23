 var numbers = [1, 2, 3, 4, 5, 6];
 var multiNumbers = numbers.map(randomNumbers)
 document.getElementById("numberArray").innerHTML = numbers;

 function randomNumbers(num) {
     return num * 2;
 };

 function btnClick() {
     document.getElementById("randomNumber").innerHTML = multiNumbers;
 };