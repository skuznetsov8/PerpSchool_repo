/*Написать 2 функции:

шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами 
какие-то буквы по заданному алгоритму и возвращает строку.
проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад 
на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.
crypto(‘password’) -> ssapdorw
      password
check(‘ssapdorw’, ‘password’) -> true

check(‘ssapdorw’, ‘wrong’) -> false*/
const pass1 = 'password';
const pass2 = 'password';

function crypto(pass) {
  const mas = pass.split('').reverse();
  //console.log(mas);
  const mm = mas.splice(-4, 4);
  const el1 = mas.slice(1, 2).join('');
  const el2 = mas.slice(2, 3).join('');
  mas[1] = el2;
  mas[2] = el1;
  //console.log(mas);
  //console.log(mm);
  //console.log(mm2);
  const cryptoPass = mm.concat(mas).join('');
  //console.log(cryptoPass);
  return cryptoPass;
}

crypto(pass1);

function check(pass, checkpass) {
  const oldPass = crypto(pass).split('');
  //console.log(oldPass);
  const mm = oldPass.splice(-4, 4);
  //console.log(mm);
  //console.log(oldPass);
  const el1 = mm.slice(1, 2).join('');
  const el2 = mm.slice(2, 3).join('');
  mm[1] = el2;
  mm[2] = el1;

  //console.log(mm);
  const deCryptopass =
    checkpass === mm.concat(oldPass).reverse().join('') ? true : false;
  //console.log(mm.concat(oldPass).reverse().join(''));
  console.log(deCryptopass);
  return deCryptopass;
}

check(pass1, pass2);
