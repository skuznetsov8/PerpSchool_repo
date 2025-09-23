function sortWithLoops(arr) {
  // создаем копию массива, чтобы не мутировать исходный
  const newArray = arr.slice();

  // внешний цикл по позициям от начала до предпоследней
  for (let i = 0; i < newArray.length - 1; i++) {
    // предполагаем наименьший элемент текущей подстановки
    console.log(`i = ${i}`);
    let minIndex = i;

    // внутренний цикл ищет минимальный элемент в оставшейся части
    for (let j = i + 1; j < newArray.length; j++) {
      console.log(`- j = ${j}`);
      if (newArray[j] < newArray[minIndex]) {
        console.log(`!!! ${newArray[j]} < ${newArray[minIndex]}`);
        minIndex = j;
      }
    }

    // обмен, если найден элемент меньше текущего
    if (minIndex !== i) {
      const tmp = newArray[i];
      newArray[i] = newArray[minIndex];
      newArray[minIndex] = tmp;
    }
  }

  return newArray;
}

// Пример:
const arr = [1, 40, -5, 10, 0];
console.log(sortWithLoops(arr)); // [-5, 0, 1, 10, 40]
