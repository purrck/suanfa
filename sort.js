// 冒泡排序  每次找最大 把大的置换到后面

const log = (text, msg) => {
  console.log(text, msg)
}
// 冒泡排序比较所有相邻的两个项，如果第j个比第j-1大，则交换它们。
// 内层循环减去 i 的原因：从内循环减去外循环中已跑过的轮数，就可以避免内循环中所有不必要的比较。

const popo_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        // console.log('---inner', j, arr[j]);
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
}
const section_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
}

const insert_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    //   let minIndex = i
    //   for (let j = i; j < arr.length; j++) {
    //     if (arr[j] < arr[minIndex]) {
    //       minIndex = j
    //     }
    //   }
    //   if (i !== minIndex) {
    //     [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    //   }
    let j = i
    const cur = arr[i]
    while (j > 0 && arr[j - 1] > cur) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = cur
  }
}

const quick_sort = (arr) => {
  if (arr.length <= 1) return arr
  let left = [], right = [];
  const midIndex = Math.floor(arr.length / 2)
  const midNum = arr.splice(midIndex, 1)[0]
  // console.log('midNum', midNum);
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (arr[i] > midNum) {
      right.push(cur)
    } else {
      left.push(cur)
    }
  }
  // console.log('left', left);
  // console.log('right', right);
  const ans = quick_sort(left).concat(midNum, quick_sort(right))
  // console.log('ans', ans);
  return ans
}
const partition = (arr, l, r) => {
  // 循环使 左右分开
  const pos = arr[r]
  console.log('partition----start', l, r);
  console.log('randomized_partition---00', arr);

  // let j = l - 1
  // for (let i = l; i < r - 1; ++i) {
  //   if (arr[i] <= pos) {
  //     console.log('partition----arr[i] <= pos', i);
  //     j = j + 1;
  //     [arr[j], arr[i]] = [arr[i], arr[j]]
  //   }
  // }
  // [arr[j + 1], arr[r]] = [arr[r], arr[j + 1]]
  // console.log('partition----0', arr);

  let x = l, y = r - 1;
  if (r - l > 1) {
    while (x < y) {
      if (x < y && arr[x] <= pos) x++
      if (x < y && arr[y] > pos) y--
      if (x < y) {
        [arr[x], arr[y]] = [arr[y], arr[x]]
      }
    }
    // arr[x] = pos
    [arr[x], arr[r]] = [arr[r], arr[x]]
  }
  // console.log('partition----1', arr);
  console.log('randomized_partition---2222', x, y, arr);

  return x;
}
const findBigIndex = (arr, arr1) => {
  const sortArr = arr1.sort((a, b) => a - b)
  return arr.findIndex(e => e == sortArr[1])
}
const randomized_partition = (arr, l, r) => {
  // 寻找一个基准值
  let midIndex = findBigIndex(arr, [arr[l], arr[Math.floor((r + l) / 2)], arr[r]])
  const pos = arr[midIndex]
  // 置换到r位置 方便循环
  console.log('randomized_partition---midIndex', midIndex);
  console.log('randomized_partition---pos', pos);
  // console.log('partition---11', midIndex);
  [arr[r], arr[midIndex]] = [arr[midIndex], arr[r]]
  // console.log('partition---arr', arr.toString(), arr.length);
  return partition(arr, l, r)
}
const quick_sort_v1 = (arr, l, r) => {
  if (l < r) {
    const pos = randomized_partition(arr, l, r);

    quick_sort_v1(arr, l, pos - 1);
    quick_sort_v1(arr, pos + 1, r);

  }
  // console.log('left', left);
  // console.log('right', right);
  // console.log('ans', arr);
  return arr
}




let testArr = [4, 1, 2, 6, 7, 8, 10, 3, 11, 5, 100, 9]
console.log('sortArray---start', testArr.toString(), testArr.length);

quick_sort_v1(testArr, 0, testArr.length - 1)
console.log('sortArray---end', testArr.toString(), testArr.length);