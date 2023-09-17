// DATE: 09/07/23

function commas(num){
  //Add some commas!
  let numString = ''
  let ans=[]
    if (num.toString().split('.')[1].length>3) {
      numString = Math.abs(num).toFixed(3).toString().split('').reverse();
    } else {
      numString = Math.abs(num).toString().split('').reverse();
    }
    for (let i = 0; i < numString.length; i++) {
      const element = numString[i];
      if (element.match('.')===null &&) {
        
      } else {
        ans.push(element)
      }
      
    }
  return numString
}
console.log(commas(10000.23));
const a =456
console.log('23sdf5'.indexOf('.'));
  module.exports = {commas};
/*
LINK: https://www.codewars.com/kata/56a115cadb39a2faa000001e/train/javascript

DESCRIPTION.

Your task is to convert a given number into a string with commas added for easier readability. 
The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. 
There does not need to be a comma at the end of the number.

You will receive both positive and negative numbers.

Examples

commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"
*/