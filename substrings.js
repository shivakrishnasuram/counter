function isSubsequence(small, large) {
    let i = 0; // for small
    for (let j = 0; j < large.length; j++) {
        if (small[i] === large[j]) {
            i++;
        }
    }
    return [i, small.length]
}

console.log(isSubsequence("ae", "abcde")); // true
// console.log(isSubsequence("aec", "abcde")); // false