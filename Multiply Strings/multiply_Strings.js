// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const len1 = num1.length, len2 = num2.length;
    const product = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        const digit1 = num1.charCodeAt(i) - 48;
        for (let j = len2 - 1; j >= 0; j--) {
            const digit2 = num2.charCodeAt(j) - 48;
            const p1 = i + j, p2 = i + j + 1;

            const sum = digit1 * digit2 + product[p2];
            product[p2] = sum % 10;
            product[p1] += Math.floor(sum / 10);
        }
    }

    let start = 0;
    while (start < product.length && product[start] === 0) {
        start++;
    }

    return product.slice(start).join('');
};
