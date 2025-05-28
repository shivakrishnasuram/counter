debugger;
function bubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n- i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers));
