/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

//Solution
function arrayFill(elem, newLen) {
    if (typeof elem !== 'number' && typeof elem !== 'string' && typeof elem !== 'object') {
          throw new Error('arr type should be an number, string or object');
        }
    
      let arr = [];
      arr.length = newLen;
      
      return arr.fill(elem);
    }
    
    console.log(arrayFill('x', 5));