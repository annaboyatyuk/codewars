function insertDash(num) {
  let numString = '';
  let numArr = num.toString().split('');
  for(let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1) {
      numString += numArr[i] + '-';
    } else {
      numString += numArr[i];
    }
  }
  return numString;
}
