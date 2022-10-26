let me = ["Tiziano", "Nicosia", "20", "Diploma ITIS"];

me.splice(2, 1, "09-11-2001");
me[0] = me[0].toUpperCase();
me[1] = me[1].toUpperCase();
console.log(me);

const n = 7;

//Variante con slice
let hash = "#######";
for (let i = 0; i < n; i++) {
  console.log(hash);
  hash = hash.slice(0, hash.length - 1);
}

//Variante con for annidato
let hash2 = "";
for (let i = 0; i < n; i++) {
  for (let j = n - i; j > 0; j--) {
    hash2 = hash2 + "#";
  }
  console.log(hash2);
  hash2 = "";
}
