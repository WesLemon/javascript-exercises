const removeFromArray = function (arr, ...args) {
    let result = arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                result.splice(i, 1)
                i--
            }
        }
    }
    return result
};


// More elegant solution

// const removeFromArray = function (array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     return newArray;
//   };

// Do not edit below this line
module.exports = removeFromArray;
