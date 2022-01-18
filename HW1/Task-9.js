/*
Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

//Solution
var arr = [1,2,3,4,5,6];
var a;
var b = 1;
var count = 0;
while (b > 0) {
    b=0;
    count++;
for (var i=0; i < arr.length; i++) {
    if( arr[i] < arr[i+1] ) {
        a = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = a;
        b++;
    }
}
}
console.log(arr);
console.log('passуы' + ' ' + count);