function zeroLast(arrayz) {
    let result = [];
    let result2 = [];
    for (let i = 0; i < arrayz.length; i++) {
      if (arrayz[i] !== 0) {
        result.push(arrayz[i]);
      }
      else{
        result2.push(arrayz[i])
      }
    }
    return result;
  }
console.log(zeroLast([1, 2, 4, 0, 5, 4, 1, 0]));