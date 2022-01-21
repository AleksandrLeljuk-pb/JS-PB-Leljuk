/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

//Solution
function isNumeric(a) {
    return typeof a == 'number';
  }
function f(a) {
        if ( isNumeric(a) ) {
            switch (a) {
                case 1:
                    return 'Воскресенье';
                    break;
                case 2:
                    return 'Понедельник';
                    break;
                case 3:
                    return 'Вторник';
                    break;
                case 4:
                    return 'Среда';
                    break;
                case 5:
                    return 'Четверг';
                    break;
                case 6:
                    return 'Пятница';
                    break;
                case 7:
                    return 'Пятница';
                    break;
                default:
                    console.log('Подумай еще раз - в неделе не может быть больше 7 дней и меньше 1!')
            }
            
         } else {
             console.log ( 'Error: parameter type is not a Number'); 
         }
    }
var a;
var dayWeek = f(5);
console.log ( 'День недели ' + '-' + ' ' + dayWeek );