function longestword(stringgy){
    let longestwordss =""
    let currentwordss =""
    for (let i =0 ;i<=stringgy.length;i++){
        let charss =stringgy[i]
        if (charss === " " || i===stringgy.length){
            if(currentwordss.length> longestword.length){
                longestwordss=currentwordss
            }
            currentwordss=""
            }
        else{
            currentwordss+=charss
        }
    }
    return longestwordss
}
console.log(longestword("shiva krishna suram sskkkkkkkk"))