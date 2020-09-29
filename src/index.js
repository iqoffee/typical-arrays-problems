exports.min = function min(arr) {
    if (arr == "" || arr == null) {
        return 0;
    }
    let result = 0;
    result = arr.sort((a, b) => a - b);
    console.log(result[0]);
    return result[0];
};

exports.max = function max(arr) {
    if (arr == "" || arr == null) {
        return 0;
    }
    let result = 0;
    result = arr.sort((a, b) => a - b).reverse();
    console.log(result[0]);
    return result[0];
};

exports.avg = function avg(arr) {
    if (arr == "" || arr == null) {
        return 0;
    }
    let result = 0;
    for (let i of arr) {
        result += Number(i);
    }
    result = result / arr.length;
    return result;
};

// min = function min(arr) {
//     if (arr == "" || arr == null) {
//         return 0;
//     }
//     let result = 0;
//     result = arr.sort((a, b) => a - b);
//     console.log(result);
//     return result[0];
// };

// max = function max(arr) {
//     if (arr == "" || arr == null) {
//         return 0;
//     }
//     let result = 0;
//     result = arr.sort((a, b) => a - b).reverse();
//     console.log(result);
//     return result[0];
// };

// avg = function avg(arr) {
//     if (arr == "" || arr == null) {
//         return 0;
//     }
//     let result = 0;
//     for (let i of arr) {
//         result += Number(i);
//     }
//     result = result / arr.length;
//     console.log(result);
//     return result;
// };

// max([
//     2,
//     -24,
//     13,
//     -11,
//     16,
//     -12,
//     -16,
//     24,
//     13,
//     -38,
//     19,
//     -16,
//     19,
//     3,
//     2,
//     32,
//     0,
//     -10,
//     -19,
//     -27,
// ]);
// min([
//     2,
//     -24,
//     13,
//     -11,
//     16,
//     -12,
//     -16,
//     24,
//     13,
//     -38,
//     19,
//     -16,
//     19,
//     3,
//     2,
//     32,
//     0,
//     -10,
//     -19,
//     -27,
// ]);
// avg([
//     -39,
//     30,
//     -32,
//     -9,
//     3,
//     -2,
//     -11,
//     -4,
//     -32,
//     39,
//     0,
//     -14,
//     7,
//     20,
//     -12,
//     22,
//     -23,
//     19,
//     0,
//     2,
// ]);
