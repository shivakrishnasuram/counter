function arrayz(stringgy,char){
    var arr =""
    for(let i =0 ;i<stringgy.length;i++){
        if(stringgy[i]!==char){
            arr+=stringgy[i]
        }
    }
    return arr
}
console.log(arrayz("surma","s"))