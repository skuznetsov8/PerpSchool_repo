/*В зависимости от языка пользователя, вывести в консоль соответствующие приветствия.*/
const lang = navigator.language;

switch (true) {
  case lang == 'ru':
    console.log('Привет!');
    break;

  case lang == 'en':
    console.log('Hello!');
    break;

  case lang == 'de':
    console.log('Gutten tag!');
    break;
}
//console.log(lang);
