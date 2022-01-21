/*
####Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

//Solution
var sumArgs = 0;
function isNumeric(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
  }
function f() {
    for (var i = 0; i < arguments.length; i++) {
        if ( isNumeric(arguments[i]) ) {
            sumArgs += arguments[i]; 
         } else {
             console.log ( 'аргумент ' + i +  '- введено не число!'); 
         }
    }
    return sumArgs;
}
sumArgs = f(1,2,'s',4);
console.log ( 'Сумма всех числовых аргументов равна' + ' ' + sumArgs );