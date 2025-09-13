function valuta(money, currency, newValuta) {
  let kurs;
  let newMoney;
  switch (newValuta) {
    case 'rub':
    case 'usd':
    case 'eur':
    case 'gbp':
      if (currency === newValuta) {
        kurs = 1;
        console.log(`Курс 1 ${currency} = 1 ${newValuta}`);
        break;
      } else {
        switch (currency) {
          case 'rub':
            newValuta == 'usd'
              ? (kurs = Number(100))
              : newValuta == 'eur'
              ? (kurs = Number(120))
              : newValuta == 'gbp'
              ? (kurs = Number(150))
              : (kurs = null);

            console.log(`Курс 1 ${currency} = ${kurs} ${newValuta}`);
            break;
          case 'usd':
            newValuta == 'rub'
              ? (kurs = Number(100))
              : newValuta == 'eur'
              ? (kurs = Number(1.1))
              : newValuta == 'gbp'
              ? (kurs = Number(1.5))
              : (kurs = null);
            console.log(`Курс 1 ${currency} = ${kurs} ${newValuta}`);
            break;
          case 'eur':
            newValuta == 'usd'
              ? (kurs = Number(0.3))
              : newValuta == 'rub'
              ? (kurs = Number(200))
              : newValuta == 'gbp'
              ? (kurs = Number(0.7))
              : (kurs = null);
            console.log(`Курс 1 ${currency} = ${kurs} ${newValuta}`);
            break;
          case 'gbp':
            newValuta == 'usd'
              ? (kurs = Number(0.5))
              : newValuta == 'eur'
              ? (kurs = Number(0.8))
              : newValuta == 'rub'
              ? (kurs = Number(300))
              : (kurs = null);
            console.log(`Курс 1 ${currency} = ${kurs} ${newValuta}`);
            break;
          default:
            kurs = null;
            console.log('Такую валюту не умеем');
        }
      }
      newMoney = money * kurs;
      console.log(newMoney);
      return newMoney;
      break;

    default:
      console.log('Такую валюту не умеем');
      newMoney = null;
      return newMoney;
      break;
  }
}

valuta(150, 'gbp', 'eur');
