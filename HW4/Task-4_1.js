/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

//Solution
var nArr = [];
function newForEach(arr,fsq) {
    if(!Array.isArray(arr)) {
        throw new Error ('змінна arr має бути масивом');
    }
    if(typeof fsq !== 'function') {
        throw new Error ('змінна fsq має бути функцією')
    }
    //var nArr = [];  - чому не спрацьовує коли масив об’являється в цьому місті????
    for(var i = 0; i < arr.length; i++) {
        nArr[i] = fsq(arr[i], i, arr);
    }
    return nArr;
}
function fsq(item, i, arr) {    
    var x = item;
    nArr[i] = x*x;
    return nArr[i];
}
var arr = [1,2,3];
var arrSq = newForEach(arr,fsq);
console.log('первинний масив')
console.log( arr );
console.log('трансформований  функцією fsq масив');
console.log( arrSq );