/*
#### Задача 12

Дан массив с числами: `[1,2,3,-5,-2,1,-4]`

Найдите сумму положительных элементов массива. В результате вы должны получить число `7`

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

//Solution
var arr = [1,2,3,-5,-2,1,-4];
var arrSumPositive = 0;
for (var i=0; i < arr.length; i++) {
    if( arr[i] > 0)  {
        arrSumPositive += arr[i];
    } 
}
console.log(arrSumPositive)