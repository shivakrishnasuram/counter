function missing(array,n){
    let total =n*(n+1)/2
    let sum =0 
    for(let i = 0;i<array.length;i++){
        sum+=array[i]
    }
    return total - sum
}
console.log(missing([1,2,3,4,6],6))