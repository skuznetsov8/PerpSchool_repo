const arr = [1, 40, -5, 10, 0];

function sortArray(array) {
  const result = [];
  //перебираем исходный массив
  for (const el of array) {
    //console.log(` el - ${el}`);
    let inserted = false;
    //перебираем новый массив
    for (let i = 0; i < result.length; i++) {
      //console.log(`i - ${result[i]}`);
      //сравниваем элементы старого и нового массивов
      if (el >= result[i]) {
        //console.log(`!!! ${el} > ${result[i]}`);
        result.splice(i, 0, el);
        //console.log(mass3);
        inserted = true;
        //console.log(inserted);
        break;
      }
    }
    if (!inserted) {
      result.push(el);
      //console.log(`Push - ${el}`);
    }
  }
  return result;
}

console.log(sortArray(arr)); // [40, 10, 1, 0, -5]
