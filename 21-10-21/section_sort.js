// 选择排序，当前第i次找一个最小放到前面，下一次循环从i+1 开始
function swap(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

function section_sort_v1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let mixIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mixIndex]) {
        mixIndex = j
      }
    }
    swap(arr, i, mixIndex)
  }
  return arr;
}
let testArr = [1, 2, 6, 7, 8, 10, 3, 4, 11, 5, 100]

const res = section_sort_v1(testArr)
console.log('section_sort_v1', res)
