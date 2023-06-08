const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.replace(/[^a-z]/g, "")
    arr = str.split("")
    for (let i = 0; i < str.length / 2; i++) {
        if (!(arr[i] === arr[(str.length - 1) - i])) {
            return false
        }
    }
    return true

    // More elegant solution
    // const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    // return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
