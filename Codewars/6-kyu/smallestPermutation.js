// DATE: 08/31/23

function minPermutation(n) {
    let ans = []
    let nArray = Math.abs(n).toString().split('').sort((b,a)=> a-b);
        for (let i = 0; i < nArray.length; i++) {
            if (nArray[i]==='0') {
                ans.splice(1, 0, nArray[i])
            } else{
            ans.unshift(nArray[i])
            }
        }
    return Number(ans.join(''))*Math.sign(n);
  }

  module.exports = minPermutation;
/*
LINK: https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/train/javascript

DESCRIPTION.

Given a number, find the permutation with the smallest absolute value (no leading zeros).
Examples:

-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
*/