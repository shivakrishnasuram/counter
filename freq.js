function characterFrequency(string) {
    let frequency = {};
    for (let i = 0; i < string.length; i++) {
        if (frequency[string[i]]) {
            frequency[string[i]]++;
        } else {
            frequency[string[i]] = 1;
        }
    }
    return frequency;
}

console.log(characterFrequency("shivakrishnaisgoodboy"));

