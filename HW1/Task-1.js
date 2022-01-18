/* условие: Перепишите код, заменив оператор `if` на тернарный оператор `?`
```js
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
```
*/


//решение
var result;
var a = 2;
var b = 5;
result = (a + b < 4) ? true : false;
console.log(result)