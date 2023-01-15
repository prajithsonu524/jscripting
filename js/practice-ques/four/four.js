
function longestString(inputArray){
    let ans=''
    let curlen=0;
    inputArray.forEach(word => {
        if(word.length > curlen){
            curlen=word.length
            ans=word
        }
    });
    return ans;
}

longestStringArrow = (inputArray)=>{
    let ans=''
    let curlen=0;
    inputArray.forEach(word => {
        if(word.length > curlen){
            curlen=word.length
            ans=word
        }
    });
    return ans;
}
module.exports={longestString,longestStringArrow}