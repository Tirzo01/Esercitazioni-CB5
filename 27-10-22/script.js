//Calcolatrice

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

console.log(MathLibrary.sum(12, 5, 28, 31));
console.log(MathLibrary.sub(120, 10, 10));
console.log(MathLibrary.mul(5, 4, 3));
console.log(MathLibrary.dev(10, 2, 2));

let character1 = {
  nome: "Niko",
  class: "Wizard",
  health: 10,
  damage: 2,
  level: 15,
  Inventory: {
    slot1: "Invisible Potion",
    slot2: "Coins",
    slot3: "Knife",
    slot4: "Magic Book",
  },
  getName: function () {
    return this.nome;
  },

  getClass: function () {
    return this.class;
  },

  getHealth: function () {
    return this.health;
  },

  getDamage: function () {
    return this.damage;
  },

  getLevel: function () {
    return this.level;
  },

  getInventory: function () {
    return this.Inventory;
  },
};

let character = {
  nome: "Niko",
  class: "Wizard",
  health: 10,
  damage: 2,
  level: 15,
  Inventory: {
    slot1: "Invisible Potion",
    slot2: "Coins",
    slot3: "Knife",
    slot4: "",
  },
  getName: function () {
    return this.nome;
  },

  getClass: function () {
    return this.class;
  },

  getHealth: function () {
    return this.health;
  },

  getDamage: function () {
    return this.damage;
  },

  getLevel: function () {
    return this.level;
  },

  getInventory: function () {
    return this.Inventory;
  },

  clearInventory: function () {
    for (items in this.Inventory) {
      this.Inventory[items] = "";
    }
  },

  addLevel: function () {
    this.level++;
    return this.level;
  },

  removeLevel: function () {
    if (this.level == 0) return 0;
    this.level--;
    return this.level;
  },

  addItem: function (newItem) {
    for (items in this.Inventory) {
      if (this.Inventory[items] == "") {
        this.Inventory[items] = newItem;
        return true;
      }
    }
    return false;
  },

  removeItem: function (item) {
    for (items in this.Inventory) {
      if (this.Inventory[items].toLowerCase() == item.toLowerCase()) {
        this.Inventory[items] = "";
        return true;
      }
    }
    return false;
  },

  kill: function () {
    this.health = 0;
    this.clearInventory();
    this.removeLevel();
  },
};

for (items in character) {
  console.log(items + ": " + character[items]);
}

character.addLevel();
console.log(
  "Complimenti " +
    character.getName() +
    " hai raggiunto il livello: " +
    character.getLevel()
);

console.log("Ti meriti un premio");
character.addItem("Magic Book");
console.log("Goditi il tuo nuovo Magic Book");
console.log("Ops, sei caduto e hai perso il tuo Knife");
character.removeItem("Knife");

character.kill();
console.log(
  character.getName() + ", era troppo debole per vivere in questo mondo."
);
