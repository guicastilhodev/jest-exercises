function isPalindromo(string) {
    const formatData = string.replace(/\s+/g, '')
    const arrayData = formatData.split("").reverse();
    return formatData === arrayData.join("");
}

module.exports = isPalindromo;