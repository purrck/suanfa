const fn1 = (n) => {
  //输入正整数n，输出T可以由连续自然数的和表示的所有情况及其数量
  // 1 = 1+0
  // 3 = 2+1
  // 5 = 3+2
  // 6 = 3+2+1
  // 7 = 4+3
  // 9 = 4+3+2
  // 9 = 5+4
  //10 = 4+3+2+1 
  // 递推公式
  f(n) = f(n / 2 + 1) + f()
}
const fn2 = (n) => {
  // f(n,i,j) = f(n-2) + f(n-1)
  // 自变量是环的长度n 因变量是方法总数 ans ij 是首尾的颜色
  // 1 第一种 环拆开 化成 每块能填三种色 去掉手尾一样的颜色
  //fn(1) = 3 fn(0) = 0 fn(2)= 3*2 -
}