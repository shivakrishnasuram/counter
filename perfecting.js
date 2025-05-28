// function perfectNumber(num) {
//     if (num < 1) {
//         return false
//     }
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         } 
//     } return sum === num;
// }
// console.log(perfectNumber(28));


function perfectNumber(num) {
    if (num < 1) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
            break;
        }
    }
    return sum === num ? true : false
}
console.log(perfectNumber(28)); // Should return true

