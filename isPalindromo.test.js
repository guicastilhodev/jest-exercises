const isPalindromo = require('./isPalindromo');


describe('testa a funcao isPalindromo', () => {
    test ('arara return true', () => {
        expect(isPalindromo("arara")).toBe(true);
    });

    test ('a man a plan a canal panama return true', () => {
        expect(isPalindromo("a man a plan a canal panama")).toBe(true);
    });

    test ('test return false', () => {
        expect(isPalindromo("test")).toBe(false);
    });

    test ('"" return true', () => {
        expect(isPalindromo("")).toBe(true);
    })
});