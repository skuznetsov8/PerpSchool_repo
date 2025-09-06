/*Написать код, рассчитывающий дистанцию о объекта: 

addressLat - адрес назначения lat (например: 10)
addressLong - адрес назначения long
positionLat - текущее положение пользователя lat
positionLong - текущее положение пользователя long
В результате на основе этих координат нужно посчитать расстояние 
от текущего месторасположения до назначения.*/

//Координаты адреса назначения
const addressLat = 10;
const addressLong = 20;
//Координаты текущего положения
const positionLat = 0;
const positionLong = 0;
//
const Path = Math.sqrt(
  (addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2
);
console.log(Path);
