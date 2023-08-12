// Date: 8/12/2023

function subtract(a, b) {
    return eval(a+'n-'+b+'n').toString();

};

console.log(subtract("1020303004875647366210", "2774537626200857473632627613"));

/*
Description:

Subtract big numbers passed as strings

Arguments are passed as strings
Result should be returned as string
3 - 2 should return 1 while 2 - 3 should return -1
Zeros should not preceed a number! 02, -02, 0001 are invalid
Very large numbers will be tested
Note: 100 randomly generated tests

EXAMPLES:


*/
