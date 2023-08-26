// DATE 08/23/23
// fisrts solution
function caesarCipher(s: string, k: number): string {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let ans:string[]=[];

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-zA-z]/) == null) {
            ans.push(s[i]);
        } else if (s[i].match(/[a-z]/)) {
            ans.push(alphabet[alphabet.indexOf(s[i])+k])
        }else {
            console.log('3', s[i])
            ans.push(alphabetUpperCase[alphabetUpperCase.indexOf(s[i])+k%26])
            console.log('2', ans, s)
        }        
    }
    return ans.join('');
}
// refactored solution
function caesarCipher(s: string, k: number): string {
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY'
    return s.split('').map(x=>  {return (x.match(/[a-zA-Z]/) == null)?x: alphabet[alphabet.indexOf(x)+k%26]}).join('');
}

console.log(caesarCipher('middle-Outz', 2));
/*
LINK: https://www.hackerrank.com/challenges/caesar-cipher-1/problem?h_r=next-challenge&h_v=zen

DESCRIPTION:

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example


The alphabet is rotated by , matching the mapping above. The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

Constraints



 is a valid ASCII string without any spaces.

Sample Input

11
middle-Outz
2
Sample Output

okffng-Qwvb
Explanation

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b

*/