function pow(x, n) {
  let num = x;
  for (let i = 1; i < n; i++) {
    num *= x;
  }

  return num;
}

const x = prompt('Введите число:', '');
const n = prompt('Введите степень:', '');

alert(`${x} в степени ${n} = ${pow(x, n)}`);