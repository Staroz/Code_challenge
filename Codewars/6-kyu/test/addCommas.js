const {commas} = require('../addCommas');

describe('Testing function validBracer', ()=>{
    const input = [
        1,
        1000,
        100.2346,
        1000000000.23,
        9123.212,
        -1,
        -1000000.123,
    ]
    const answer = [
        '1',
        '1,000',
        '100.235',
        '1,000,000,000.23',
        '9,123.212',
        '-1',
        '-1,000,000.123',
    ];
    for (let i = 0; i < input.length; i++) {
        test(`given a value equal to ${input[i]}, answer should be ${answer[i]}`, ()=>{
            const data = commas(input[i]);

            expect(data).toBe(answer[i])
        })
    }

})