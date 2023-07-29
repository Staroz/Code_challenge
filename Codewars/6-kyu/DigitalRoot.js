function convertArray (n) {
    let nString = String(n);
    let nArray = nString.split('');
    let arrayNumber = [];
    
    for (i = 0; i < nArray.length; i++) {
        arrayNumber.push(Number(nArray[i]));
    }
    return addNumber(arrayNumber);
}

function addNumber (arrayNumber) {
    let addArray = 0;
    for (i=0;i<arrayNumber.length;i++) {
        addArray +=arrayNumber[i];
    }
    return addArray;
}

function digitalRoot(n) {
    let result = convertArray(n);
    if (result.toString().length>1) {return digitalRoot(result);} else {
        return result;
    }
}

console.log(convertArray (493193));

/*
Introduction

Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples:

16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/