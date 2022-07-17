function checkSpam(str) {

  let strToLower = str.toLowerCase();

  if (strToLower.includes('1xbet') || 
    
      strToLower.includes('xxx'))
      {
          return true;
      }
  return false;
}



//   return /1xBet|XXX/i.test(str);
