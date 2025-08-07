var calc = function (numb1, numb2, operation) {
    if (operation === void 0) { operation = "+"; }
    if (typeof numb1 != "number" || typeof numb2 != "number") {
        return "Informe numeros válidos";
    }
    if (operation === "+") {
        return numb1 + numb2;
    }
    else if (operation === "-") {
        return numb1 - numb2;
    }
    else if (operation === "*") {
        return numb1 * numb2;
    }
    else if (operation === "/") {
        return numb1 / numb2;
    }
    else {
        return "Informe uma operação válida";
    }
    return;
};
console.log(calc(2, 50, "+"));
