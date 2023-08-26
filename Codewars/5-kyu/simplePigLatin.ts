// Date: 8/25/2023
export const pigIt = (a : string) : string =>  {
    // code away
    let ans = a.split(' ');
    if (a.length > 0) {
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].match(/[a-zA-Z]+/) !== null) {
                ans[i] = ans[i].slice(1) + ans[i][0] + 'ay'
            } 
        }
    } else {
        return a
    }
    return ans.join(' ');  
  }


console.log(pigIt('Pig latin is cool')); //"igPay atinlay siay oolcay" 

export const pigIt2 = (a : string) : string =>  {
    // code away
    return a.replace(/(\w)(\w+)/g, '$1$2ay');
  }
/*
LINK: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
Description:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

EXAMPLES:

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
