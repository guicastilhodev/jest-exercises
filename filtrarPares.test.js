const filtrarPares = require("./filtrarPares");

describe ('testa a função filtrarPares', () => {
    test ('[1,2,3,4,5,6] return [2,4,6]', () => {
        expect(filtrarPares([1,2,3,4,5,6])).toEqual([2,4,6]);
    });

    test ('[1,3,5] return []', () => {
        expect(filtrarPares([1,3,5])).toEqual([]);
    });

    test ('[-2,-1,0,1] return [-2,0]', () => {
        expect(filtrarPares([-2,-1,0,1])).toEqual([-2,0]);
    });

    test ('[] return []', () => {
        expect(filtrarPares([])).toEqual([]);
    });
    
 });