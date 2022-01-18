/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

//Solution
var arr = [6,5,4,3,2,1];
var a;
var b = 1;
var count = 0;
while (b > 0) {
    b=0;
    count++;
for (var i=0; i < arr.length; i++) {
    if( arr[i] > arr[i+1] ) {
        a = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = a;
        b++;
    }
}
}
console.log(arr);
console.log('passes' + ' ' + count);