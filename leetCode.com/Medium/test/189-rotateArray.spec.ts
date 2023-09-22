import {expect, jest, test} from '@jest/globals';

import { rotate } from '../189-rotateArray';

describe('Testing function removeDuplicates', ()=>{
    const input = [
        [[1,2,3,4,5,6,7],3],
        [[-1,-100,3,99], 2],
    ]
    const answer = [[5,6,7,1,2,3,4], [3,99,-1,-100]];
    
    for (let i = 0; i < input.length; i++) {
        let data= rotate(input[i][0], input[i][1])
        test(`given a value equal to ${input[i]}, answer should be "${answer[i]}", and the answer was "${data}"`, ()=>{
            expect(data).toEqual(answer[i])
        })
    }
})