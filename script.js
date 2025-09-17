/*Написать 2 функции:

шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами 
какие-то буквы по заданному алгоритму и возвращает строку.
проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад 
на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.
crypto(‘password’) -> ssapdorw

check(‘ssapdorw’, ‘password’) -> true

check(‘ssapdorw’, ‘wrong’) -> false*/
const pass1 = '111';
const pass2 = '111';

function crypto(pass) {
  const mas = pass.split('').reverse();
  //console.log(mas);
  const mm = mas.splice(2, 2);
  //console.log(mas);
  //console.log(mm);
  const cryptoPass = mas.concat(mm).join('');
  //console.log(cryptoPass);
  return cryptoPass;
}

crypto(pass1);

function decrypto(pass, checkpass) {
  const oldPass = crypto(pass).split('');
  //console.log(oldPass);
  const mm = oldPass.splice(-2, 2);
  //console.log(mm);
  //console.log(oldPass);
  const mm2 = oldPass.splice(0, 2);
  //console.log(mm2);
  //console.log(oldPass);
  const deCryptopass =
    checkpass === mm2.concat(mm).concat(oldPass).reverse().join('')
      ? true
      : false;
  console.log(deCryptopass);
  return deCryptopass;
}

decrypto(pass1, pass2);
