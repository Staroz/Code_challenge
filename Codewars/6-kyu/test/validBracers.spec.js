const validBraces = require('../validBracers');

describe('Testing function validBracer', ()=>{
    const input = [
        "()))",
        "()",
        "[]",
        "{}",
        "(){}[]",
        "([{}])",
        "(}",
        "[(])",
        "({})[({})]",
        "(})",
        "(({{[[]]}}))",
        "{}({})[]",
        ")(}{][",
        "())({}}{()][][",
        "(((({{",
        "}}]]))}])"
    ]
    const answer = [
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false
    ];
    for (let i = 0; i < input.length; i++) {
        test(`given a value equal to ${input[i]}, answer should be ${answer[i]}`, ()=>{
            const data = validBraces(input[i]);
            console.log(data, answer[i]);
            expect(data).toBe(answer[i])
        })
    }

})