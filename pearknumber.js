
debugger
function findAllPeaks(arr) {
    let peaks = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let left = i === 0 || arr[i] > arr[i - 1];
        let right = i === n - 1 || arr[i] > arr[i + 1];

        if (left && right) {
            peaks.push(arr[i]);
        }
    }
    return peaks;
}
console.log(findAllPeaks([1, 3, 2, 4, 1]))