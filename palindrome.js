// let stringgy ="shhs"
// let x=""
// for (let i =stringgy.length;i>=0;i--){
//     x+=stringgy[i]
// }
// // console.log(x)
// if(stringgy==x){
//     return "true"
// }
// else{
//     return "false"
// }

let stringgy = "shhs";
let x = "";
for (let i = stringgy.length - 1; i >= 0; i--) { // Start from stringgy.length - 1
    x += stringgy[i];
}
if (stringgy === x) {
    console.log("true");
} else {
    console.log("false");
}
