/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
*/

//Solution
function newSome(arr,f) {
    if(!Array.isArray(arr)) {
        throw new Error ('змінна arr має бути масивом');
    }
    if(typeof f !== 'function') {
        throw new Error ('змінна f має бути функцією')
    }   
    for(var i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) !== 'thrue' && (i+1) == arr.length) {
            return 'false'
        } if(f(arr[i], i, arr) == 'thrue') {
            return 'thrue';
            break;
        }
    }    
}
function f(item, i, arr) {    
    if(item > 100) {
        return 'thrue';
    } 
}
var arr = [11,2,11,7,115,10.5,11,2,-4];
var arrSome = newSome(arr,f);
console.log('масив, що перевіряється')
console.log( arr );
console.log('результат перевірки хоча б одного елементу масиву на умову ">100" :');
console.log( arrSome );