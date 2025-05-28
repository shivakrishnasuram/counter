function removegivenchar(str,char){
    let finalstring=""
    for(let i =0 ;i<str.length;i++){
        if(str[i]!=char){
            finalstring+=str[i]
        }
        
    }return finalstring
}
console.log(removegivenchar("shiva","s"))