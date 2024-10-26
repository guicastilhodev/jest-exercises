function fatorial(n) {
    if (n == 0) return 1;
    if (n > 0) {
        return n * fatorial(n-1);
    } else {
        throw new Error ('error: numero menor que 0')
    }
} 

module.exports = fatorial;