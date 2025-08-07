export function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a + b;
  }
};

export function subtracao(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a - b;
  }
};

export function multiplicacao(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a * b;
  }
};

export function divisao(a, b) {
  if (b === 0) {
    return "divisão por 0 não é permitida";
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a / b;
  };
};

export function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a % b;
  }
};

export function potenciacao(a, b) {
  if (a === 0 && b < 0) {
    return "0 elevado a numero negativo não existe";
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    return a ** b;
  };
};

export function porcentagem(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    var resultado = ((a / 100) * b);
    return resultado;
  }
};

export function raiz(a) {
  if (a < 0) {
    return "não existe raiz de um número negativo";
  } else if (typeof a !== 'number') {
    return 'Por favor, informe números válidos';
  } else {
    var resultado = Math.sqrt(a);
    return resultado;
  };
};