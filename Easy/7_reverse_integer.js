/**
 * @param {number} x
 * @return {number}
Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
var reverse = function(x) {
    var reversed;
    var len;
    var xstring = x.toString();

    if (Math.sign(x) == -1) {
        reversed = "-";
    } else {
        reversed = "";
    }
    len = xstring.length;
    for (var i = 0; i < len; i++) {
        reversed += xstring[len-i-1].toString();
    }
    if (parseInt(reversed) >= Math.pow(2,31)-1 || parseInt(reversed) <= -(Math.pow(2,31))) {
        return 0;
    } else {
        return parseInt(reversed);
    }
};

/*
Time to complete: used my old solution lol
Result:
Runtime: 88 ms, faster than 23.55% of JavaScript online submissions for Reverse Integer.
Memory Usage: 37.8 MB, less than 5.21% of JavaScript online submissions for Reverse Integer.
*/