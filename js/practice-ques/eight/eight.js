function countVowel(str) { 
    
    const count = str.match(/[aeiou]/gi).length;
  
    return count;
}
const countVowelArrow=str=>{

    const count = str.match(/[aeiou]/gi).length;
  
    return count;
}
module.exports={countVowel,countVowelArrow}