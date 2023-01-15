const ScriptEndArrow = (str) => {
    if(str.length<6) return false;
    return str.endsWith("Script");
  }
  
  function ScriptEndRegular(str) {

    if(str.length<6) return false;
    return str.endsWith("Script");
  }
  
  module.exports = {
    ScriptEndRegular,ScriptEndArrow
  }