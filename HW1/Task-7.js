/*
####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

//Solution
var arr = [1,2,3,4];
var arrSumEven = 0;
for (var i=0; i < arr.length; i++) {
    if(arr[i]%2 == 0) {
        arrSumEven += arr[i];
    } 
}
console.log(arrSumEven)