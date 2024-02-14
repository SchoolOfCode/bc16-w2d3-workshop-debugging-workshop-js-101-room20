function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    console.log(digit)
    if (9 === digit) {
      count++;
    }
  }

  console.log(count);
  return count;
}

countNumberOfNinesInNumber([9,1,2,3,9]);