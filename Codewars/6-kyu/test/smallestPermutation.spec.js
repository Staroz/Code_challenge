const minPermutation = require('../smallestPermutation');

describe('Testing function minPermutation(n)', ()=>{
  const data = [-20, -32, 0, 10,29394,-9571080];
  const result = [-20, -23, 0, 10,23499, -1005789];
  for (let i = 0; i < data.length; i++) {
    test(`When n=${data[i]}`, () => {
        expect(minPermutation(data[i])).toBe(result[i])
    });
  }
});

