// const num = prompt('Введите любое число');
// alert(`Вы ввели - ${num} \nКвадрат - ${num**2} \nКуб - ${num**3}`)

// let promo = prompt('Введите промокод');
// promo = promo.toLowerCase()
// if (promo =='скидка'){
//     alert('Промокод использован')
// } else{
//     alert('Вы ввели не тот промокод или он уже не дейстивтелен')
// }

// const name = prompt('Введите ваше имя');
// const year = prompt('Введите год рождения');
// const NewYear = prompt('Введите нынешнйи год');
// alert(`${name}, ${NewYear - year} лет`)

// const name = prompt('Введите ваше имя');
// const year = prompt('Введите год рождения');
// const NewYear = prompt('Введите нынешнйи год');

// let ost = (NewYear - year) % 10;

// if (ost >=1 && ost <=4){
//     alert(`${name}, ${NewYear - year} года`)
// } else if (ost == 0 || ost >=5  && ost <=9){
//     alert(`${name}, ${NewYear - year} лет`)
// } else{
//     alert('Вы что-то не так ввели')
// }

// const age = prompt('Введите возраст');
// let credit = null;
// let sum;
// if (age < 18){
//     alert('Рано еще кредит брать вам')
// } else if (age >=18 && age <=21){
//     credit = prompt('Вы можете взять кредит до 50.000 Р.\n Введите сумму кратную 1000')
//     sum = (credit % 1000 == 0) ?  alert(`Вы подали заявку на получение ${credit}`) : alert(`Введите сумму, которая делится на 1000 без остатка.`);
// } else if (age >=22 && age <=35){
//     credit = prompt('Вы можете взять кредит до 400.000 Р.\n Введите сумму кратную 1000')
//     sum = (credit % 1000 == 0) ?  alert(`Вы подали заявку на получение ${credit}`) : alert(`Введите сумму, которая делится на 1000 без остатка.`);
// } else if (age >=36 && age <=65){
//     credit = prompt('Вы можете взять кредит до 1.000.000 Р.\n Введите сумму кратную 1000')
//     sum = (credit % 1000 == 0) ?  alert(`Вы подали заявку на получение ${credit}`) : alert(`Введите сумму, которая делится на 1000 без остатка.`);
// }

// const palindrom = ['заказ', 'довод', 'кабак', 'казак', 'комок', 'наган', 'потоп', 'ротор', 'топот', 'шабаш', 'шалаш', 'боб', 'дед', 'кок', 'мим', 'око', 'пуп', 'шиш'];

// const palindromEnter = prompt('Проверка слова на полиндром');

// if (palindrom[0] || palindrom[1] == palindromEnter){
//     alert('Это слово палиндром');
// } else{
//     alert('Это слово не палиндром');
// }

// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!newarr.includes(arr[i])) {
//     newarr.push(arr[i]);
//   }
// }

// console.log(newarr);

// let num = prompt('Введите число');
// let number = Number(num);
// const int = [];
// for (let i = 0; i<= number; i+= 1){
//     int.push(i);
//     console.log(int[i]);
// }

// const obj = {
//     some: 'some',
//     dom: 'text',
//     arr: [1, 2, 3, 4, 5],
//     tom: 'there'
// };
// let a = [];
// let fir = obj.some;
// let sec = obj.dom;
// let thi = obj.arr;
// let forth = obj.tom;
// a = [fir, sec, thi, forth];

// console.log(a)

// const fieldSize = 3;
// let field = []; 

// for (let i = 0; i < fieldSize; i++) {
//   field[i] = [];
//   for (let j = 0; j < fieldSize; j++) {
//     field[i][j] = ' ';
//   }
// }

// for (let i = 0; i < fieldSize; i++) {
//   let row = '';
//   for (let j = 0; j < fieldSize; j++) {
//     row += `| ${field[i][j]} |`;
//   }
//   console.log(row);
// }