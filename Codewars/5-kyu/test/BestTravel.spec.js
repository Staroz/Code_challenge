const { chooseBestSum } = require('../BestTravel')

describe('Choose best sum of an Array', ()=> {
    let ls = [50, 55, 56, 57, 58]
    test('given a valid array ', async () => {
        const data = chooseBestSum(163, 3, ls);
        expect(data).toBe(163)
    });

    test('given a invalid array', async () => {
        ls = [50]
        const data = chooseBestSum(163, 3, ls);
        expect(data).toBeNull()
    });

    test('given a valid array and k != 3 (aleatory)', async () => {
        ls = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89];
        const data = chooseBestSum(880, 8, ls);
        expect(data).toBe(876);
    });
    test('given a valid array and k != 3, but impossible answer', async () => {
        ls = [[100, 64, 123, 2333, 144, 50, 132, 123, 34, 89]]
        const data = chooseBestSum(230, 4, ls);
        expect(data).toBeNull();
    });
})

