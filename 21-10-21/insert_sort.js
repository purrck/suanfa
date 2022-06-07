/**
 * 插入排序
 * 
 */
function insert_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i
    const now = arr[i]
    while (j > 1 && arr[j - 1] > now) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = now
  }
  return arr
}
/**
 * 
 * @param {*} arr 
 * @param {*} x 起始位置
 * @param {*} y 终点位置
 * @returns 
 */
function insert_sort_v1(arr, l, r) {
  // const length = r - l
  console.log('insert_sort_v1---start', l, r, arr,)
  for (let i = l; i <= r; i++) {
    let j = i
    const now = arr[i]
    while (j > l && arr[j - 1] > now) {
      // console.log('insert_sort_v1---time', i)
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = now
  }
  console.log('insert_sort_v1---end', l, r, arr)
  return arr
}
// let testArr = [1, 7, 8, 2, 6, 10, 3, 4, 11, 5, 100, 77, 33, 22, 44, 55, 23]
// insert_sort_v1(testArr, 0, 2)
// insert_sort_v1(testArr, 3, 8)
// console.log('insert_sort_v1-----insert', res)
module.exports = { insert_sort_v1, insert_sort }
// export default insert_sort_v1
