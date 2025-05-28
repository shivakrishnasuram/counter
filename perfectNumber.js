// function perfectNumber(num){
//     let sum = 0;
//     for(let i =1 ;i<num;i++){
//         if(num%i===0){
//             sum+=i;
//         }
//     }return sum === num
// }
// result=perfectNumber(1)
// console.log(result)

// let array = [1, 2, 3];
// let obj = { key: "value" };
// if (array + obj) {
//     console.log(typeof (array + obj));
// }
// let num = "5";
// if (++num === 6) {
//     num += typeof num;
// }
// console.log(num);
let a = null;
let b = undefined;
if (a || b) {
    a += "is falsy";
} else {
    b = "is falsy";
}
console.log(a, b);
