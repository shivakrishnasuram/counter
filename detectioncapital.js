function detection(str){
    for(let i =0 ;i<str.length;i++){
        if (str[i]>="a"&& str[i]<="z"){
            return false
        }  
    }
    return true
}
console.log(detection("SHIVA"))