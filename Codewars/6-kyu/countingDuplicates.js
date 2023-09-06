// DATE: 09/05/23

function duplicateCount(text){
  
  let textArray = text.toLowerCase()
  let count = 0
  for (let i = 0; i < textArray.length; i++) {
    for (let j = i+1; j < textArray.length; j++) {
      if (textArray[i]===textArray[j]) {
        count += 1
        textArray = textArray.replaceAll(textArray[i], '')
        i= i-1;
        break;
      }
    }
}

  return count
}

  module.exports = duplicateCount;
/*
LINK: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

DESCRIPTION.

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
 The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Examples

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/