var userEnterNumber = Number(prompt('Raqam  kiriting', 0));

var dividerNumberToThree = 3;
var dividerNumberToFive = 5;

var residueDividedToThree = userEnterNumber % dividerNumberToThree;
var residueDividedToFive = userEnterNumber % dividerNumberToFive;

function fizzbuzz() {
    var result = '';

    if(residueDividedToThree === 0 && residueDividedToFive !== 0) {
        result = 'Fizz';
    }else if(residueDividedToThree !== 0 && residueDividedToFive ===0) { 
        result = 'Buzz';
    }else if(residueDividedToThree === 0 && residueDividedToFive === 0) {
        result = 'FizzBuzz';
    }else {
        result = 'Qayta son kiriting';
    }

    return result;
}

console.log(fizzbuzz());