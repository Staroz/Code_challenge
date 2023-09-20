import {expect, jest, test} from '@jest/globals';

import removeDuplicates from '../26-removeDuplicates';

describe('Testing function removeDuplicates', ()=>{
    const input = [
        [],
        [1,1,2],
        [0,0,1,1,1,2,2,3,3,4],
    ]
    const answer = [0, 2, 5];
    
    for (let i = 0; i < input.length; i++) {
        let data= removeDuplicates(input[i])
        test(`given a value equal to ${input[i]}, answer should be "${answer[i]}", and the answer was "${data}"`, ()=>{
            expect(data).toEqual(answer[i])
        })
    }
})