// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Explanation:
// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

// Example 2:
// Input: words = ["omk"]
// Output: []

// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

// Constraints:
// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const dictionaryRow = {
        // First row
        q: 'firstRow', w: 'firstRow', e: 'firstRow', r: 'firstRow', t: 'firstRow',
        y: 'firstRow', u: 'firstRow', i: 'firstRow', o: 'firstRow', p: 'firstRow',
        Q: 'firstRow', W: 'firstRow', E: 'firstRow', R: 'firstRow', T: 'firstRow',
        Y: 'firstRow', U: 'firstRow', I: 'firstRow', O: 'firstRow', P: 'firstRow',

        // Second row
        a: 'secondRow', s: 'secondRow', d: 'secondRow', f: 'secondRow', g: 'secondRow',
        h: 'secondRow', j: 'secondRow', k: 'secondRow', l: 'secondRow',
        A: 'secondRow', S: 'secondRow', D: 'secondRow', F: 'secondRow', G: 'secondRow',
        H: 'secondRow', J: 'secondRow', K: 'secondRow', L: 'secondRow',

        // Third row
        z: 'thirdRow', x: 'thirdRow', c: 'thirdRow', v: 'thirdRow', b: 'thirdRow',
        n: 'thirdRow', m: 'thirdRow',
        Z: 'thirdRow', X: 'thirdRow', C: 'thirdRow', V: 'thirdRow', B: 'thirdRow',
        N: 'thirdRow', M: 'thirdRow'
    };

    return words.filter(word => {
        for (let i = 0; i < word.length - 1; i++) {
            if (dictionaryRow[word[i]] !== dictionaryRow[word[i + 1]]) {
                return false;
            }
        }
        return true;
    });
};