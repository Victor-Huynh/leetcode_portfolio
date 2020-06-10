/**
 * @param {number} x
 * @return {boolean}
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 */

var isPalindrome = function(x) {
    if (x < 0)
        return false;
    var temp = x.toString().split("").reverse().join("").toString();
    return (temp == x);
};

console.log(isPalindrome(131));
console.log(isPalindrome(-131));

/*
Time to complete: 6:19
Result:
Runtime: 220 ms, faster than 36.09% of JavaScript online submissions for Palindrome Number.
Memory Usage: 46 MB, less than 27.58% of JavaScript online submissions for Palindrome Number.\
*/
