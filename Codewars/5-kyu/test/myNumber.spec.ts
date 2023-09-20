import {expect, jest, test} from '@jest/globals';

import { narcissistic } from '../MyNumber';

describe('Testing function narcissistic', ()=>{
    const input = [
        7,
        153,
        122,
        487,
    ]
    const answer = [true, true, false, false];
    
    for (let i = 0; i < input.length; i++) {
        let data= narcissistic(input[i])
        test(`given a value equal to ${input[i]}, answer should be "${answer[i]}", and the answer was "${data}"`, ()=>{
            expect(data).toEqual(answer[i])
        })
    }
})