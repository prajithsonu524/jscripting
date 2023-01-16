const getLargestEvenArrow = (arr) => {
  let maxEven = -1;
  arr.forEach((val) => {
    if (val > maxEven && val%2==0) {
      maxEven = val;
    }
  });
  return maxEven;
};
  
function getLargestEvenRegular(arr) {
  let maxEven = -1;
  arr.forEach((val) => {
    if (val > maxEven && val%2==0) {
      maxEven = val;
    }
  });
  return maxEven;
}
  
module.exports = {
  getLargestEvenArrow,
  getLargestEvenRegular
};