const checkLeapArrow = (year) => {
  return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false : true : false;
};
  
function checkLeap(year) {
  return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 ? true : false : true : false;
}
  
module.exports = {
  checkLeap,checkLeapArrow 
};