let arr = new Array(100).fill(0).map((e, i) => +i)
console.log('arrarrarrarr111111', arr.length);

let num8Min = 0;
let len = arr.length
while (len--) {
  console.log("num8Min", arr[num8Min].toString().indexOf("8"));
  if (arr[num8Min].toString().indexOf("7") !== -1) {
    let first = arr.splice(num8Min, 1);
    console.log("first", first);
    // arr.push('nmb');
    arr.push(first.toString());
    continue
  } else {
    num8Min++
  }

}
console.log('arrarrarrarr222222', arr);