const calc = (
	numb1: number,
	numb2: number,
	operation: string = "+"
): number | string => {
	if (typeof numb1 != "number" || typeof numb2 != "number") {
		return "Informe numeros válidos";
	}
	if (operation === "+") {
		return numb1 + numb2;
	} else if (operation === "-") {
		return numb1 - numb2;
	} else if (operation === "*") {
		return numb1 * numb2;
	} else if (operation === "/") {
		return numb1 / numb2;
	} else {
		return "Informe uma operação válida";
	}
	
	return
};

console.log(calc(2, 50, "+"));
