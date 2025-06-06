function nonrepeating(stringgy) {
    let nonstring = ""
    for (let i = 0; i < stringgy.length; i++) {
        let count = 0
        for (let j = 0; j < stringgy.length; j++) {
            if (i !== j && stringgy[i] === stringgy[j]) {
                count++
                break
            }
        }
        if (count === 0) {
            nonstring += stringgy[i]
        }
    }
    return nonstring
}
console.log(nonrepeating("shivakrishnaisgoodboy"))

// function nonrepeating(stringyy){
//     let nonstring =""
//     for (let i =0;i<stringyy.length;i++){
//         for(let j =0 ;j<stringyy.length;j++){
//             if(i!==j && stringyy[i] === stringyy[j]){
//                 nonstring+=stringyy[i]
//                 break
//             }
//         }
//         if(nonstring.length===0){
//             nonstring+=stringyy[i]
//         }
//     }
//     return nonstring;
// }
// result =nonrepeating("shshhsiindjlgjddbndjfjdngklgkdo");
// console.log(result)



function nonrepeating(stringyy) {
    for (let i = 0; i < stringyy.length; i++) {
        let isUnique = true;
        for (let j = 0; j < stringyy.length; j++) {
            if (i !== j && stringyy[i] === stringyy[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            return stringyy[i]; // Return the first non-repeating character
        }
    }
    return null; // Return null if no non-repeating character is found
}
const result = nonrepeating("shshhsiindjlgjddbndjfjdngklgkdo");
console.log(result);
