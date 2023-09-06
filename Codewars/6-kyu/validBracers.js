// DATE: 09/05/23

// function validBraces(braces){
//     // if (braces.length % 2 !=0 || braces[0].search(/[)\]}]/) ===0 || braces[braces.length -1].search(/[(\{[]/) !== -1) return false
//     let bracesArray = braces.split('');
//     for (let i = 0; i < bracesArray.length; i++) {
//         if (bracesArray[i] === ')') {
//             if (bracesArray[i-1]==='(') {
//                 bracesArray.splice(i-1, 2)
//                 i = 0
//             } else return false
//         } else if (bracesArray[i]=== ']') {
//             if (bracesArray[i-1]==='[') {
//                 bracesArray.splice(i-1, 2)
//                 i = 0
//             } else return false
//         } else if (bracesArray[i]=== '}') {
//             if (bracesArray[i-1]==='{') {
//                 bracesArray.splice(i-1, 2)
//                 i = 0
//             } else return false 
//             }  
//         }
//     return bracesArray.length>0?false:true;
//   }
  function validBraces(braces){
  while (braces.search(/\(\)|\[\]|\{\}/) !== -1) {
    braces = braces.replace(/\(\)|\[\]|\{\}/, '')
  }
  return braces.length === 0

}

  module.exports = validBraces;
/*
LINK: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

DESCRIPTION.

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/