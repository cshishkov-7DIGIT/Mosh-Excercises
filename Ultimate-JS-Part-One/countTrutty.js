function countTruthy(array) {
  return array.reduce((count, value) => {
    if (value) {
      count++;
    }
    return count;
  }, 0);
}

console.log(countTruthy([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
