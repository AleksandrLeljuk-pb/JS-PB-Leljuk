/*
####Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/

//Solution
function newReduceRight(arr,f,acc) {
    if(!Array.isArray(arr)) {
        throw new Error ('змінна arr має бути масивом');
    }
    if(typeof f !== 'function') {
        throw new Error ('змінна f має бути функцією');
    }   
    if(typeof acc !== 'string' && typeof acc !== 'number') {
        throw new Error ('acc має бути строкою або числом');
    }
    var result = 0;
    for(var i = (arr.length - 1); i >= 0; i--) {
        var result = result + f(arr[i], i, arr);
        }
        return result+acc;
    }    

function f(item, i, arr) {    
    return item; 
}
var arr = [2,2,2,2,2,2,2,2,2];
var acc = 'строка';
var arrReduceRight = newReduceRight(arr,f,acc);
console.log('масив, що перевіряється')
console.log( arr );
console.log('початкова змінна "acc"');
console.log(acc) 
console.log('результат обробки архіву функцією РедьюсРайт :');
console.log( arrReduceRight );