/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

//Solution
var nArr = [];
function newFilter(arr,f) {
    if(!Array.isArray(arr)) {
        throw new Error ('змінна arr має бути масивом');
    }
    if(typeof f !== 'function') {
        throw new Error ('змінна f має бути функцією')
    }
    //var nArr = [];  - чому не спрацьовує коли масив об’являється в цьому місті????
    for(var i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) !== 'undefined') {
            nArr.push(arr[i])
        }
    }
    return nArr;
}
function f(item, i, arr) {    
    if(item > 1) {
        return item;
    } else return 'undefined'    
}
var arr = [1,2,3,-7,15,0.5,-1,-2,4];
var arrFilt = newFilter(arr,f);
console.log('первинний масив')
console.log( arr );
console.log('трансформований  функцією newFilter масив');
console.log( arrFilt );