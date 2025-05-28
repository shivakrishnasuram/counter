// let arr = [1,2,2,3,4,5]

// let newArr =[]
// for(let i =0 ;i<arr.length;i++){
//     for(let j =0 ;j<=i;i++){
//         if(i==j){
//             newArr.push(i)
//         }
//     }

// }

// console.log(newArr)


// let strings ="vinni"
// for(let i =strings.length;i>=1;i--){
//     console.log(strings[i])
// }

let strings2 ="helloworld"
let vowels2 ="aeiouAEIOU"
for (let i =0 ;i<strings2.length;i++){
    for(let j =0 ;j<vowels2.length;j++){
        if(strings2[i] ==vowels2[j]){
            console.log(strings2[i])
            break
        }
    }
}

// let strings ="helloworld"
// let vowels ="aeiouAEIOU"
// for (let i =0 ;i<strings.length;i++){
//     for(let j =0 ;j<vowels.length;j++){
//         if(strings[i] ==vowels[i]){
//             console.log(strings[i])
//             break
//         }
//     }
// }