/*
const nul1 = Number.parseFloat(prompt("введите первое число"));
const nul2 = Number.parseFloat(prompt("введите второе число"));
//alert("результат сложения " + nul1 + " и " + nul2 + " равен " + ( nul1+ nul2));
function sum (a, b) {
    return a + b;
}
alert(`результат сложения  ${nul1}  и  ${nul2} равен  ${sum(nul1, nul2).toFixed(2)}`);
*/
/*
const goodLive = confirm("Вам хорошо живется?");   // конферм делает форму с "да" или "нет"
if (goodLive) {
    alert("Тогда мы идём к вам!");
}
else {
    alert("Ну вы держитесь там!");
}
*/

const product = prompt ("Введите продукт").toLowerCase();

switch(product){
    case "мандарины":
        alert ("Мандарины стоят 100р/кг");
        break;
    case "бананы":
        alert ("Бананы стоят 180р/кг");
        break;
    case "груши":
        alert ("Груши стоят 150р/кг");
        break;
    default:
        alert("Нет такого продукта");
}