let MathLibrary = {
  sum: function (...args) {
    let res = 0;
    for (n of args) res += n;
    return res;
  },
  sub: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res -= args[i];
    return res;
  },

  mul: function (...args) {
    let res = 1;
    for (n of args) res *= n;
    return res;
  },

  dev: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res /= args[i];
    return res;
  },

  /* Potenza con esponente intero e positivo*/
  pow: function (base, exp) {
    if (exp < 0) return 0;
    if (exp == 1) return base;
    return base * this.pow(base, exp - 1);
  },

  factorial: function (n) {
    if (n == 1) return 1;
    return n * this.factorial(n - 1);
  },
};

let args = process.argv;
let op = args[2];
let numbers = [];

for (number of args.slice(3)) {
  let n = parseInt(number);
  if (!isNaN(number)) {
    numbers.push(n);
  } else {
    console.log("Errore: Argomenti non validi.");
    return;
  }
}

switch (op.toLowerCase()) {
  case "addizione":
    console.log("Il risultato e': " + MathLibrary.sum(...numbers));
    break;
  case "sottrazione":
    console.log("Il risultato e': " + MathLibrary.sub(args[3], args[4]));
    break;
  case "moltiplicazione":
    console.log("Il risultato e': " + MathLibrary.mul(...numbers));
    break;
  case "divisione":
    if (args[4] == 0) {
      console.log("Impossibile dividere per 0");
      return;
    }
    console.log("Il risultato e': " + MathLibrary.dev(args[3], args[4]));
    break;
  default:
    console.log("Errore: Nessuna operazione specificata.");
}
