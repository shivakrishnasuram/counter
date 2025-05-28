function CountingVowels(stringgy) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < stringgy.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (stringgy[i] === vowels[j]) {
                count++;
                break;  
            }
        }
    }

    return count;
}

console.log(CountingVowels("aeiou"));