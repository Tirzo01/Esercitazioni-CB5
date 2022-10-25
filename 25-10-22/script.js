let op;
do {
  op = parseInt(
    prompt(
      "Inserisci l'operazione da eseguire \n1. Addizione \n2. Sottrazione \n3. Moltiplicazione\n4. Divisione\n"
    )
  );
} while (op < 1 || op > 4 || isNaN(op));

let a = parseInt(prompt("Inserisci il primo numero"));
let b = parseInt(prompt("Inserisci il secondo numero"));
let result = 0;
let valid = true;
if (!isNaN(a) && !isNaN(b)) {
  switch (op) {
    case 1:
      result = a + b;
      break;
    case 2:
      result = a - b;
      break;
    case 3:
      result = a * b;
      break;
    case 4:
      result = a / b;
      break;
  }
  alert("Il risultato è " + result);
} else {
  alert("Qualcosa e' andato storto");
}
