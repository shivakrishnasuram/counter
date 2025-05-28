

// let str = "javascript"; // Initialize the string
// for (let i = 0; i < str.length; i++) { // Outer loop to iterate through each character
//     let strs = ""; // Initialize an empty string for each starting character
//     for (let j = i; j < str.length; j++) { // Inner loop to create substrings
//         strs += str[j]; // Append the current character to the substring
//         console.log(strs); // Print the current substring
//     }
// }


let str = "javascript";
let strs = ""; // Initialize outside the loop
for (let i = 0; i < str.length; i++) {
    strs += str[i]; // Append the character at each step
    console.log(str[i]); // Print the progressively built string
}
