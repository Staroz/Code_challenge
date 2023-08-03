// Date: 8/2/2023

function toUnderscore(string) {
    // TODO: complete 
    if (typeof(string) === 'number') {
        string = string.toString();
        return string;
    } else {
    let ans = string.split('');
    for (let i = 0; i < ans.length; i++) {
        if (ans[i].search(/[A-Z]/)!=-1) {
            if (i === 0) {
                ans[i] = ans[i].toLowerCase();
            } else {
                ans[i] = ans[i].toLowerCase();
                ans.splice(i, 0, "_")
            }
        } 
    }
    return ans.join('');
    }
}
console.log(toUnderscore('A123T6898'));



/*
Description:

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. 
Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

EXAMPLES:

"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

*/
