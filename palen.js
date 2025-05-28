// function palen(str){
//     let newstr =str.split("").reverse().join();
//     return newstr
// }
// console.log(palen("sssskk"))
function palendromes(str){
    let newstr =""
    for(let i =str.length-1;i>=0;i--){
        newstr += str[i]
    }
    return str ===newstr ? true : false
}
console.log(palendromes("madam"))