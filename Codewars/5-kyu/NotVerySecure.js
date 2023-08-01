// Date: 7/31/2023

function alphanumeric(string){
    const regex = /^[a-zA-Z0-9]+$/;
    if (string.length > 0) {
        return string.search(regex) != -1 ? true : false;
    } else {
        return false;
    }
  }

console.log(alphanumeric('sad s3Af'));
// const regex = /^[a-zA-Z0-9]+$/;
// const str = 'ab'

// console.log(str.search(regex));


/*
Description:

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

*/
