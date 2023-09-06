const duplicateCount = require('../countingDuplicates')

describe('Testing function validBracer', ()=>{
    const input = [
        "", 
        "abcde",
        "aabbcde",
        "aabBcde",
        "Indivisibility",
        "Indivisibilities"
    ]
    const answer = [ 0, 0, 2, 2, 1, 2];
    for (let i = 0; i < input.length; i++) {
        test(`given a value equal to ${input[i]}, answer should be '${answer[i]}'`, ()=>{
            const data = duplicateCount(input[i]);
            console.log(data, answer[i]);
            expect(data).toBe(answer[i])
        })
    }

})