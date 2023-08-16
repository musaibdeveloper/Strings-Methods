// Ends with method.

// The endsWith() method returns true if a string ends with the specified string.
//  If not, the method returns false.

// Example

let str = "Musaib is learns daily and practice coding"

let check = str.endsWith("practice");

console.log(check);

// Even spaces has value.
// Output is in boolean
// Input is in string. 

// ends with has two parameters.

// 1. "The characters to search in the string"
// 2. indicates the portion of the string to consider and search.

let str1 = "Musaib is working and learning daily"

let result = str1.endsWith("Musaib is working" ,17)

console.log(result);

// Here till 17 index the string is checked and mentioned  as true.