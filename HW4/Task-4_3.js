/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

//Solution

function newEvery(arr,f) {
    if(!Array.isArray(arr)) {
        throw new Error ('змінна arr має бути масивом');
    }
    if(typeof f !== 'function') {
        throw new Error ('змінна f має бути функцією')
    }   
    for(var i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) == 'thrue' && (i+1) == arr.length) {
            return 'thrue'
        } if(f(arr[i], i, arr) !== 'thrue') {
            return 'false'
        }
    }    
}
function f(item, i, arr) {    
    if(item > 1) {
        return 'thrue';
    }  
}
var arr = [111,2,3,7,15,110.5,111,2,-4];
var arrEvery = newEvery(arr,f);
console.log('масив, що перевіряється')
console.log( arr );
console.log('результат перевірки елементів масиву на умову ">1" :');
console.log( arrEvery );