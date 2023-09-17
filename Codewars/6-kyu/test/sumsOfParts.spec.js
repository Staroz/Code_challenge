const partsSums = require('../sumsOfParts')

describe('Testing function validBracer', ()=>{
    const input = [
        [],
        [0, 1, 3, 6, 10],
        [1, 2, 3, 4, 5, 6],
        [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
    ]
    const answer = [
        [0],
        [20, 20, 19, 16, 10, 0],
        [21, 20, 18, 15, 11, 6, 0],
        [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0],
    ];
    for (let i = 0; i < input.length; i++) {
        test(`given a value equal to ${input[i]}, answer should be ${answer[i]}`, ()=>{
            const data = partsSums(input[i]);
            expect(data).toEqual(answer[i])
        })
    }
})