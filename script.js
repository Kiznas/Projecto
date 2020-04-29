'use strict';

let answer = prompt("Ваш бюджет на месяц ?" );
let answer2 = prompt("Введите дату в формате", "YYYY-MM-DD");
let appdata = {
    budget:answer,
    time:answer2,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false 

};
let Ques1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
Ques2 = prompt("Во сколько обойдется?", ''),
Ques3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
Ques4 = prompt("Во сколько обойдется?", '');

console.log (answer,answer2);

appdata.expenses[Ques1] = Ques2;
appdata.expenses[Ques3] = Ques4;

alert(appdata.budget / 30);
console.log (appdata);