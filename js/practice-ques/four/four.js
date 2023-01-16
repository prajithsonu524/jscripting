
function getlongestString(inputArray){
  let ans='';
  let curlen=0;
  inputArray.forEach(word => {
    if(word.length > curlen){
      curlen=word.length;
      ans=word;
    }
  });
  return ans;
}

const getlongestStringArrow = (inputArray)=>{
  let ans='';
  let curlen=0;
  inputArray.forEach(word => {
    if(word.length > curlen){
      curlen=word.length;
      ans=word;
    }
  });
  return ans;
};
module.exports={getlongestString,getlongestStringArrow} ;//object with 2 fuctions
module.exports=getlongestString; //mainly used while exporting class
