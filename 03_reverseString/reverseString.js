const reverseString = function(str) {
    let result = []
    arr = str.split("")
    
    // result = arr.reverse() can be used in place of this for loop

    for(let i = 0; i < str.length; i++) {
        char = arr.pop()
        result.push(char)
    }
    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;
