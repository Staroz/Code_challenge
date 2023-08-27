
const { solution } = require('../multiplesOf3-5')

describe('Function Multiples of 3 or 5', ()=> {
    let number = 10
    test('given a valid number', async () => {
        const data = solution(number);
        expect(data).toBe(23)
    });

    test('given a negative number ', async () => {
        number = -10
        const data = solution(number);
        expect(data).toBe(0)
    });

    test('given a number minor or equal to 3 ', async () => {
        number = 3;
        const data = solution(number);
        expect(data).toBe(0)
    });

})

