// Date: 8/19/2023
export function turnOfBob(n: bigint){
    if (n%2n==0n) {
        if ((n/2n)%2n!=0n || n/2n==2n) {
            n = n/2n;
        } else {
            n-=1n;
        }
    } else { 
        n-=1n
    } 
    return n;
}

export function cardGame(n : bigint): bigint {
    let count: bigint = 0n;
    let rest: bigint = n;
    while (rest > 0n ) {
        if (rest%2n==0n) {
            if ((rest/2n)%2n!=0n || rest/2n==2n ) {
                rest = rest/2n;
                count += rest;
            } else {
                rest-=1n;
                count += 1n;
            }
        } else { 
            rest-=1n 
            count += 1n;
        } 
        rest = turnOfBob(rest);
    }
    return count; 
}

console.log(cardGame(73n));


/*
Description:

Alice and Bob are playing a game. There are (1<= n <=10^18) cards on the table. The aim of the game is to collect the most cards. The rules:

if the number of cards is even, the players can either take half of the cards from the stack, or only 1 card -- as they choose;
if the number of cards is odd, the players must take 1 card.
Alice starts the game.

Return the maximum number of cards Alice can collect, if Bob plays optimally (tries to get as many cards as possible for himself).


EXAMPLES:

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*/
