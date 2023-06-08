const sumAll = function (start, end) {
    if (typeof start == "number" && typeof end == "number") {
        if (start < 0 || end < 0) {
            return 'ERROR'
        }
        let sum = 0
        if (start > end) {
            let temp = start
            start = end
            end = temp
        }
        for (let i = start; i <= end; i++) {
            sum += i
        }
        return sum
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
