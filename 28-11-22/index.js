const express = require("express");
const MathLibrary = require(__dirname + "/src/MathModule.js");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server in esecuzione");
});

app.get("/calcolatrice", function (req, res) {
  res.sendFile("calcolatrice.html", { root: __dirname + "/src/html" });
});

/*
 *
 *  SOMMA
 *
 */
app.get("/sum", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = MathLibrary.sum(a, b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  SOTTRAZIONE
 *
 */
app.get("/sub", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = MathLibrary.sub(a, b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  MOLTIPLICAZIONE
 *
 */
app.get("/mul", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = MathLibrary.mul(a, b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});

/*
 *
 *  DIVISIONE
 *
 */
app.get("/div", function (req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let res_json = {
    result: "Errore",
  };
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    res.status(200).send(JSON.stringify(res_json));
  } else {
    risultato = MathLibrary.div(a, b);
    console.log("Risultato: " + risultato);
    res_json.result = risultato;
    res.status(200).send(JSON.stringify(res_json));
  }
});
