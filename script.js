var age = +prompt('Введите свой возраст');
if (age > 0 && age <= 18) {
    alert('Вы еще молоды вам нужно учиться');
} else if (age > 18 && age <= 50) {
    alert('Вам нужно работать');
} else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию');
} else if (age > 59 && age <= 150) {
    alert('Вы пенсионер');
} else if (age > 150 || isNaN(age)) {
    alert('Что то пошло не так');
}

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
if (a < b && b < c || b > c && a > b) {
    alert('Среднее число ' + b);
} else if (b > a && a > c || a > b && c > a) {
    alert('Среднее число ' + a);
} else if (a > c && c > b || c > a && c < b) {
    alert('Среднее число ' + c);
} 

