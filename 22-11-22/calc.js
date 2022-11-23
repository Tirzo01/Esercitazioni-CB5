module.exports = {
  sum: function (...args) {
    let res = 0;
    for (n of args) res += parseInt(n);
    return res;
  },
  sub: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res -= parseInt(args[i]);
    return res;
  },

  mul: function (...args) {
    let res = 1;
    for (n of args) res *= parseInt(n);
    return res;
  },

  dev: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res /= parseInt(args[i]);
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
