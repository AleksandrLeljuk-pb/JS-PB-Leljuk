/*
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
*/

//Solution
function newReduce(arr,f,acc) {
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
    for(var i = 0; i < arr.length; i++) {
        var result = result + f(arr[i], i, arr);
        }
        return acc+result;
    }    

function f(item, i, arr) {    
    return item; 
}
var arr = [1,1,1,1,1,1,1,1,1];
var acc = 'строка';
var arrReduce = newReduce(arr,f,acc);
console.log('масив, що перевіряється')
console.log( arr );
console.log('початкова змінна "acc"');
console.log(acc) 
console.log('результат обробки архіву функцією Редьюс :');
console.log( arrReduce );