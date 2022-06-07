/**
 * @Author wys
 * @Date 2020/9/30 1:12 下午
 * @Description 字符串模糊匹配
 */

/**
 * @Author Niuxy
 * @Date 2020/9/30 2:08 下午
 * @Description str1, str2 待比较字符串，threshold: 比较阈值，redundances: 冗余信息项
 */
function jugIsSame(str1, str2, threshold = 0.5, redundances = ['自治区', '直辖市', '省', '市', '区', '县']) {
  if (str1 == null || str2 == null || str1.length == 0 || str2.length == 0)
    throw new Error("str1 or str2 is null");
  // console.log('jugIsSame--0--start', str1, str2, threshold, redundances);

  str1 = deleteRedundances(str1, redundances);
  str2 = deleteRedundances(str2, redundances);
  let length = Math.max(str1.length, str2.length);
  // console.log('jugIsSame--1--去处冗余', str1, str2, length);
  return isSame(str1, str2, length, threshold);
}

//比较重合率与阈值
function isSame(str1, str2, length, threshold) {
  let re = coincidenceRate(str1, str2, length);
  // console.log('isSame--重合率', re);
  return re >= threshold;
}

//计算重合率
function coincidenceRate(str1, str2, length) {
  // console.log('coincidenceRate--0', str1, str2, length);
  let coincidenc = longestCommonSubsequence(str1, str2);
  // console.log('coincidenceRate--1', coincidenc / 2);
  return (coincidenc / length).toFixed(2);
}

//去处冗余
function deleteRedundances(str, redundances) {
  // console.log('deleteRedundances', str, redundances);
  for (i in redundances) {
    let index = str.indexOf(redundances[i]);
    // console.log('deleteRedundances1', index);
    if (index != -1) str = str.replace(redundances[i], "");
  }
  // console.log('deleteRedundances2', str);
  return str
}

//计算最长公共子序列
function longestCommonSubsequence(str1, str2) {
  // console.log('longestCommonSubsequence--0', str1, str2);
  if (str1 == null || str2 == null) return 0;
  let m = str1.length, n = str2.length;
  let cache = creatArray(m + 1, n + 1);
  // console.log('longestCommonSubsequence--1', cache);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // console.log('longestCommonSubsequence--2', str1.charAt(i), str2.charAt(j));
      if (str1.charAt(i) == str2.charAt(j)) {
        cache[i][j] = cache[i + 1][j + 1] + 1
      } else {
        cache[i][j] = Math.max(cache[i][j + 1], cache[i + 1][j]);
      }
    }
  }
  // console.log('cache[0][0]', cache[0][0]);
  return cache[0][0];
}

function creatArray(n, m) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = []; //每行有10列
    for (var j = 0; j < m; j++) {
      arr[i][j] = 0;
    }
  }
  return arr
}
const res = jugIsSame('蓟州', '蓟县')
console.log('结果返回res', res);

const myAddress = ['天津', '蓟州区']
list.forEach(s => {
  console.log('list--item', s);
  // if (s.name.includes(myAddress[0])) {
  const isSame = jugIsSame(s.name, myAddress[0])
  if (!isSame) return
  myAddress[0] = s.name
  s.sub && s.sub.length && s.sub.forEach(q => {
    // if (q.name.includes(myAddress[1])) {
    const isSame = jugIsSame(q.name, myAddress[1])
    if (isSame) {
      myAddress[1] = q.name
    }
  })
})
console.log('myAddress', myAddress);