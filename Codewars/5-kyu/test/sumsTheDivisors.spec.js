const {dsMultofPfs} = require('../sumTheDivisors2');

describe('Testing function validBracer', ()=>{
    const input = [
        [10, 100],
        [20, 120],
        [50, 140],
    ]
    const answer = [
        [12, 15, 35, 42, 60, 63, 66, 68, 84, 90, 95],
        [35, 42, 60, 63, 66, 68, 84, 90, 95, 110, 114, 119],
        [60, 63, 66, 68, 84, 90, 95, 110, 114, 119, 140],
    ];
    for (let i = 0; i < input.length; i++) {
        test(`given a value equal to ${input[i]}, answer should be ${answer[i]}`, ()=>{
            const data = dsMultofPfs(input[i][0], input[i][1]);
            expect(data).toEqual(answer[i])
        })
    }
})