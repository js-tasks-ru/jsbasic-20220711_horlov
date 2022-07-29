function getMinMax(str) {

  let arr = str.split(' ');
 
  let min = +arr[0];
  let max = min;
  for (let i = 0; i < arr.length; i++) {
    let e = +arr[i];
    if (e < min) min = e;
    if (e > max) max = e;
  }
  return {min, max};
}








//   const res = {};
//   str.replace(/\S+/g, (n) => {

//     n = +n;

//     (!("min" in res) || res.min > n) && (res.min = n);

//     (!("max" in res) || res.max < n) && (res.max = n);
//   });

//   return res;
// }