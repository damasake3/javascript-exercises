const reverseString = function(input) {
    let word = input;
    let theword = "";
    
    for (let i = word.length-1; i > -1; i--) {
        theword += word[i];
    }
    return theword;
};

// Do not edit below this line
module.exports = reverseString;
