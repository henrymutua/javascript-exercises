const palindromes = function (str) {
    var reg = /[\W_]/g ;
    var smallStr = str.toLowerCase().replace(reg, "");

    var reversedString = smallStr.split(" ").reverse().join("");
    reversedString === smallStr ? true: false;

};

// Do not edit below this line
module.exports = palindromes;
