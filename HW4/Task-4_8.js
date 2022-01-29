/*
####Задача 8

Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
*/

//Solution
function f(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('arr type should be an array');
    };
    const newArr = arr.flat(Infinity);
  
    newArr.forEach(item => {
      if (typeof item !== 'number') {
        throw new Error('arr should contain only numbers');
      }
    });
  
    if (newArr.length === 0) {
      return 0;
      }
  
    const result = newArr.reduce((acc, item) => {
      return acc += item;
    }, 0);
  
    return result;
  };
  
  console.log(f([[[1, 2], [1, 2]], [[2, 1], [1, 2]]]));
  console.log(f([[[[[1,2]]]]]));
  console.log(f([[[[[1,2]]],2],1]));
  console.log(f([[[[[]]]]]));
  console.log(f([[[[[],3]]]]));