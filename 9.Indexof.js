// Check the element exist in the string and retunrs the index value.

// It always gives the first value index which means "j" is the first word and the output is 0.
// Even though is also there with the word java, but is search the first value right to left.

// If the string is not found retunrn as -1.


let str = "javascript is not java"

console.log(str.indexOf("j")); // 0.


// Same code : 

let str = "Javascript is not java"

console.log(str.indexOf("j")); // 18.