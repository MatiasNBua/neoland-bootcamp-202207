function mod(value, divisor) {
  if (value > divisor) {
    resultado = value % divisor;

    return resultado;
  }
}

// demos

console.log(mod(10, 2));
// 0

console.log(mod(3, 2));
// 1

console.log(mod(11, 3));
// 2