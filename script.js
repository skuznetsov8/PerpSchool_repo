/*Напишите функцию, которая принимает:
Массив чисел
Функцию удаления элементов
И возвращает отфильтрованный массив. При это функция удаления 
элементов принимает число и возвращает true, если его надо 
удалить и false, если надо оставить.

Для функции удаления, удаляющей все числа больше 5:

Входной массив: [3, 6, 9, 2]
Выходной массив: [3, 2] (числа 6 и 9 удалены, так как они больше 5)
*/

function delInArr(x) {
  //console.log(`111 x  --  ${x}`);
  //console.log(`111  --  ${x > 5}`);
  return x > 5;
}

function filterArr(arr, fn) {
  for (let i = 0; i < arr.length; ) {
    //console.log(`2 --- [i] = ${i}, arr[i] -  ${arr[i]}`);
    let res = fn(arr[i]);
    //console.log(`22 - res -  ${res}`);
    if (res) {
      // console.log(`222 - fn(arr[i]) -  ${res}`);
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(arr);
  return arr;
}

filterArr([3, 6, 9, 2], delInArr);
