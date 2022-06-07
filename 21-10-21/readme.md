# 排序算法

## 1.冒泡排序

- 外循环 i 内循环 j
- 两两对比 交换位置，大的值放后面(最大的值总在最后)
- 循环的时候就可以排出最后一项 从外循环的 0 开始到 len-j

  ```javascript
  var arr = [5, 4, 8, 1, 3, 7, 0, 9, 2, 6]
  var len = arr.length
  var tmp = null
  for (var j = 0; j < len - 1; j++) {
    for (var i = 0; i < len - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = tmp
      }
    }
    console.log('第' + j + '次循环', arr)
  }
  ```

---

## 2.选择排序

- 外循环 i 内循环 j
- 双循环-记录最小值,最小值就是当前外循环当前 i 的值(最小值总在最前)
- 循环的时候就可以排出最小值，从外循环的 i 开始到 len-1

```javascript
var arr = [5, 4, 8, 1, 3, 7, 0, 9, 2, 6]
var len = arr.length
let min = 0
for (let i = 0; i < len - 1; i++) {
  min = i
  for (let j = i + 1; j < len; j++) {
    if (arr[j] < arr[min]) {
      min = j
    }
  }
  console.log('第' + (i + 1) + '次循环', arr)
  let temp = arr[i]
  arr[i] = arr[min]
  arr[min] = temp
}
console.log('次循环', arr)
```

---

## 3.插入排序

- 即构建有序序列，未排序数据依次从已排序数据按从后往前比较，插入到合适的位置
- 两两对比找最小,记录最小值,最小值就是当前外循环当前 i 的值(最小值总在最前)
- 循环的时候就可以排出最小值，从外循环的 i 开始到 len-1

```javascript
var arr = [5, 4, 8, 1, 3, 7, 0, 9, 2, 6]
for (let i = 1; i < len - 1; i++) {
  const now = arr[i]
  let j = i
  while (j > 1 && arr[j - 1] < now) {
    let temp = arr[j - 1]
    arr[j] = temp
    j--
  }
  arr[i] = now
}
```
