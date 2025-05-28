// function arrayNew(arrays){
    
//     for(let i =0 ;i<arrays.length;i++){
//         arrays.push(arrays[i])
//     }
//     return arrays
// }
// result =arrayNew([1,2,3])
// console.log(result)

function arrayNew(arrays) {
    let result = [];  // Create a new array to store the elements
    // Use a single loop to add elements from the original array to result
    for (let i = 0; i < arrays.length; i++) {
        result.push(arrays[i]);  // Add the element in original order
    }

    // Add the elements a second time in sequence
    for (let i = 0; i < arrays.length; i++) {
        result.push(arrays[i]);  // Add the element again
    }

    return result;
}

let result = arrayNew([1, 2, 3]);
console.log(result);  // Output: [1, 2, 3, 1, 2, 3]

