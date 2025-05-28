function reverseStr(s, k) {
    let result = ""; // Initialize an empty string to store the final result

    // Loop through the string in chunks of 2 * k
    for (let i = 0; i < s.length; i += 2 * k) {
        // Step 1: Determine the end index for reversing
        // If i + k - 1 is less than s.length, we use it as the end; otherwise, use s.length - 1
        let end = (i + k - 1 < s.length) ? i + k - 1 : s.length - 1;

        // Step 2: Reverse the first k characters within the current chunk
        let reversed = "";
        for (let j = end; j >= i; j--) {
            reversed += s[j]; // Append characters in reverse order
        }

        // Step 3: Append the remaining characters (up to 2k) in their original order
        for (let j = i + k; j < i + 2 * k && j < s.length; j++) {
            reversed += s[j]; // Append characters as they are
        }

        // Step 4: Add the reversed chunk to the result
        result += reversed;
    }

    return result; // Return the final result
}

// Test case
console.log(reverseStr("abcdefg", 2)); // Output: "bacdfeg"
