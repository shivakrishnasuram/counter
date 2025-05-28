function removeGivenchar(stringgy, char) {
    let removestringg = ""
    for (let i = 0; i < stringgy.length; i++) {
        if (stringgy[i] !== char) {
            removestringg += stringgy[i]
        }
    }
    return removestringg
}
console.log(removeGivenchar("shivakrishna", "s"))