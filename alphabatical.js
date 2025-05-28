// function alpha(str){
//     let newarray =[]
//     for(let i =0;i<str.length;i++){
//         newarray.push(str[i])
//     }
//     for(let i=0;i<=newarray.length;i++){
//         for(let j =0 ;j<=newarray.length-i;j++){
//             if(newarray[j]>newarray[j+1]){
//                 let temp =newarray[j]
//                 newarray[j]=newarray[j+1]
//                 newarray[j+1]=temp
//             }
//         }
//     }
//     let newstr =""
//     for(let i =0;i<newarray.length;i++){
//         newstr+=newarray[i]
//     }
//     return newstr
// }
// result=alpha("shivakrishna")
// console.log(result)
// function sorting(str){

//     return str.split("").sort().join()
// }


// console.log(sorting("aabbccvvssrrddnncc"))
let x = 5, y = 3;
let result = --x - y++;
console.log(result);  // Decrement first, then post increment



