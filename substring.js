function countSubstringOccurrences(string, substring) {
    let count = 0;
    for (let i = 0; i <= string.length - substring.length; i++) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (string[i + j] !== substring[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            count++;
        }
    }
    return count;
}

console.log(countSubstringOccurrences("shivakrishnaisgoodboy", "is"));
