let calculator = {

        read(a=0,b=0) {
        this.a = a;
        this.b = b;
    },
    
    sum() {
        return this.a+this.b;
    },
    
    mul() {
        return this.a*this.b
    }
}
























//   function read (a,b) {
// let a = arguments[0];
// let b = arguments[1];

//   }

//  function sum() {
     
//   if (a = 0) {
//     return b
//   } else (b = 0) {
//     return a
//   }  return this.a + this.b;
  
// };
//  function mul() {
//     return this.a * this.b;
//   },

 
// };

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
  