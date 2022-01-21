/*
####Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/

//Solution
function isNumeric(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
  }
function f(a,b,c) {
        if ( isNumeric(a) && isNumeric(a) && isNumeric(c) ) {
            var result = ( a - b ) / c; 
            return result;
         } else {
             console.log ( 'Error: all parameters type should be a Number!'); 
         }
    }
var result = f('s',9,3);
console.log ( 'Результат вычислений' + ' ' + result );