/**
 * 快速排序 二分 
 *  1.当前区间找出一个基准值，
 *  2.大的放后面，小的放左边
 *  3.不断分区重复1,2的过程
 * */
function quickSortV1(arr, l, r) {

  if (l >= r) return
  let x = l, y = r, base = arr[l] //单纯的选第一个座作为base 容易导致n！的复杂度 假设每次都是取了最大最小的数字
  while (x < y) {
    // 1,3 两行是先把正常 分布在基准值两侧的值确定
    // 这行执行完 找到一个小于 base的值 指针在y
    while (x < y && arr[y] >= base) y--
    // 令到 y指针 当前指针的值覆盖基准值的 x 然后x++(这时候y位置的值放到去了x的位置，保存下来了)
    if (x < y) arr[x++] = arr[y]
    while (x < y && arr[x] < base) x++
    // 令到 x指针 当前指针的值  覆盖刚刚的y的位置 然后y-- (这时候y可以覆盖掉 因为值已经放到base 右边了, 这样就可以不重不漏)
    if (x < y) arr[y--] = arr[x]
  }
  arr[x] = base
  quickSortV1(arr, l, x - 1)
  quickSortV1(arr, x + 1, r)
}

function quickSortV2(arr, l, r) {
  while (l < r) { //c++ stl库源码 右递归法 节省了空间大小 因为少了一个递归
    let x = l, y = r, base = arr[l]
    while (x < y) {
      while (x < y && arr[y] >= base) y--
      if (x < y) arr[x++] = arr[y]
      while (x < y && arr[x] < base) x++
      if (x < y) arr[y--] = arr[x]
    }
    arr[x] = base
    quickSortV1(arr, x + 1, r)
    r = x - 1
  }
  return
}

function quickSortV3(arr, l, r) {
  // 对V1 版本的优化
  if (l >= r) return
  // const midIndex = l;
  let midIndex = Math.floor((r - l) / 2);
  // console.log('_getMid----midIndex', midIndex);
  let x = l, y = r, base = _getMid([arr[l], arr[midIndex], arr[r]])//单纯的选第一个座作为base 容易导致n！的复杂度 假设每次都是取了最大最小的数字
  // let x = l, y = r, base = arr[midIndex]//单纯的选第一个座作为base 容易导致n！的复杂度 假设每次都是取了最大最小的数字
  console.log('_getMid----baseIndex', arr.findIndex(e => e == base));
  console.error('_getMid----base', base);
  do {
    while (arr[y] > base) y--
    while (arr[x] < base) x++
    if (x <= y) {
      const cx = arr[x];
      arr[x++] = arr[y]
      arr[y--] = cx;
      // x++, y--
    }
    console.log('ansansansansans_____', arr.toString());
  } while (x <= y)
  // arr[x] = base
  quickSortV3(arr, l, x - 1)
  quickSortV3(arr, x + 1, r)
  return
}
function _getMid(val) {
  // console.log('_getMid1', val.toString());
  val = val.sort((a, b) => a - b)
  // console.log('_getMid222', val);
  return val[1]
}

function quickSortV3_2(arr, l, r) {

}
let testArr = [1, 2, 6, 7, 8, 10, 3, 4, 11, 5, 100]
// quickSortV1(testArr, 0, testArr.length - 1)
// console.log('quickSortV1', testArr)
// testArr = [1, 2, 6, 7, 8, 10, 3, 4, 11, 5, 100]
// quickSortV2(testArr, 0, testArr.length - 1)
// console.log('quickSortV2', testArr.toString())
// testArr = [1, 2, 6, 7, 8, 10, 3, 4, 11, 5, 100]
// quickSortV3(testArr, 0, testArr.length - 1)
// console.log('quickSortV3', testArr.toString())

var arr = [5, 4, 8, 1, 3, 7, 0, 9, 2, 6];
let len = arr.length

// for (let i = 0; i < len; i++) {
//   const now = arr[i]
//   let j = i
//   while (j > 1 && arr[j - 1] > now) {
//     arr[j] = arr[j - 1]
//     j--
//   }
//   arr[j] = now
//   console.log('第' + (i + 1) + '次循环', arr)
// }
for (let i = 0; i < arr.length; i++) {
  var j = i
  const now = arr[i]
  // while (j > 1 && arr[j - 1] > now) {
  //   console.log(j)
  //   arr[j] = arr[j - 1]
  //   j--
  // }
  for (let j = 0; j < len - 1; j++) {
    console.log(i + '----' + j)
  }
  arr[j] = now
}
console.log('111', insert_sort(arr))