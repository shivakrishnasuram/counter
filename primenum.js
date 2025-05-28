function prime_number(number){
    if(number<1){
        return false;
    }
    for(let i = 2 ;i<number;i++){
        if(number%i===0){
            return false
        }
        else return true
    }
}
console.log(prime_number(6))