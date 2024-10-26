const fatorial = require('./fatorial');

describe ('testa a função fatorial', () => {
    test ('fatorial de 0 retorna 1', () => {
        expect(fatorial(0)).toBe(1);
    });
    test ('fatorial de 5 retorna 120', () => {
        expect(fatorial(5)).toBe(120);
    });
    test ('fatorial de 3 retorna 6', () => {
        expect(fatorial(3)).toBe(6);
    });
    test ('fatorial de -1 retorna erro', () => {
        expect(() => fatorial(-1)).toThrow(Error);
    });
});