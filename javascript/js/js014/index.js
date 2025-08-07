/*
Deafio:

Dado um dia da semana codificado como 0 = Dom, 1 = Seg, 2 = Ter, ...6 = Sáb, e um booleano indicando se estamos de férias, retorne uma string no formato "7:00" indicando quando o despertador deve tocar. Durante a semana, o alarme deve ser "7:00" e, no fim de semana, deve ser "10:00". A menos que estejamos de férias — nesse caso, durante a semana, deve ser "10:00" e, nos fins de semana, deve ser "off".


despertador(1, false) → '7:00'
despertador(5, false) → '7:00'
despertador(0, false) → '10:00'
*/
var despertador = function (day, vacations) {
    var isWeekened = day === 0 || day === 6;
    if (!isWeekened && !vacations)
        return "7:00";
    else if (isWeekened && !vacations)
        return "10:00";
    else if (vacations && !isWeekened)
        return "10:00";
    return "off";
};
console.log(despertador(1, false)); // 7:00
console.log(despertador(0, false)); // 10:00
console.log(despertador(6, false)); // 10:00
console.log(despertador(3, true)); // 10:00
console.log(despertador(0, true)); // off
console.log(despertador(6, true)); // off
