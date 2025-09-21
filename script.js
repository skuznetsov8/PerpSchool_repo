const arr = [1, 40, -5, 10, 0];

function sortArray(array) {
  const result = [];
  for (const el of array) {
    console.log(el);
    let inserted = false;
    for (let i of result) {
      if (el >= result[i]) {
        result.splice(i, 0, el);
        console.log(result.splice(i, 0, el));
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      result.push(el);
    }
  }
  return result;
}

console.log(sortArray(arr)); // [40, 10, 1, 0, -5]
