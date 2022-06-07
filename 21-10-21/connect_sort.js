//归并排序，插入排序和快速排序综合一下 设置一个最小区间，小于等于此区间用插入，否则用快排
const MAX_LIMIT_NUM = 7
const { insert_sort_v1 } = require('./insert_sort.js')
const merge_two_arr = (arr, l, mid, r) => {

}
function merge_sort(arr, l, r, temp) {
  if (r - l <= MAX_LIMIT_NUM) {
    //长度小直接插入排序
    insert_sort_v1(arr, l, r)
    return
  }
  const mid = 1 + (r - l) / 2
  merge_sort(arr, l, mid - 1, temp)
  merge_sort(arr, mid, r, temp)
  if (arr[mid] <= arr[mid + 1]) {
    return;
  }
  merge_two_arr(arr, l, mid, r, temp)
}
let testArr = [1, 7, 8, 2, 6, 10, 3, 4, 11, 5, 100, 77, 33, 22, 44, 55, 23]
let ans = []
console.log('merge_sort---start', testArr)
merge_sort(testArr, 0, testArr.length - 1, ans)
console.log('merge_sort---end', testArr)
