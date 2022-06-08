const arr = [-1, 1, -1, 1];
let obj = {};
obj[0] = 0;
let sum = 0;
let temp = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (!obj.hasOwnProperty(sum)) {
    obj[sum] = i;
  } else if (sum === 0) {
    let temp2 = i + 1 - obj[0];

    if (temp < temp2) {
      [[temp], [temp2]] = [[temp2], [temp]];
    }
  } else {
    let temp2 = i - obj[sum];

    if (temp < temp2) {
      [[temp], [temp2]] = [[temp2], [temp]];
    }
  }
}
console.log(temp);
