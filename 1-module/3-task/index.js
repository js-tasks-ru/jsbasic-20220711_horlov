function ucFirst(str) {
  
  if (!str) return str;

   if (str && str.length >= 1) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  } 
}