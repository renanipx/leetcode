// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let base = strs.reduce((a, b) => a.length <= b.length ? a : b);
    let end = base.length;

    for (let i = 0; i < end; i++) {
        let char = base[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return base.slice(0, i);
            }
        }
    }
    return base;
};