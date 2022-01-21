/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, 
потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

//Solution
function isNumeric(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
  }
function f(a) {
    if ( isNumeric(a) ) {
       return Math.pow(a,3); 
    } else {
        console.log ('Введено не число'); 
    }
}
var n = 2;
var result = f(n);
console.log (f(n));
console.log ( 'Куб введеного числа дорівнює' + ' ' + result );