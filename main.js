const arr = [-1, 1, 1, -1];
let sum = 0;
let temp = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];
    // console.log(sum);
    if (sum === 0) {
      //   console.log(j - i + 1);
      let temp2 = j - i + 1;
      if (temp < temp2) {
        [[temp], [temp2]] = [[temp2], [temp]];
      }
    }
  }
  sum = 0;
}

console.log(temp);
