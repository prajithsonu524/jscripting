
function digitCheckReg(number){
    let digit =number%10;
    while(number>0){
        if(number%10!==digit)return false
        number=Math.floor(number/10)
    }
    return true
}
const digitCheckArrow = number=>{
    let digit =number%10;
    while(number>0){
        if(number%10!==digit)return false
        number=Math.floor(number/10)
    }
    return true
}

module.exports ={digitCheckReg,digitCheckArrow};