// nel terminare fare npm install os poi questo
const os = require("os");
//richiamare le sue funzioni
console.log(os.userInfo());
console.log(os.arch());

const MathLibrary = require("./calc.js");
const url = require("url");

//creare un server
//utilizzando il modulo http
const http = require("http");
//req è la richiesta che ricevo dal browser
//res è la risposta alla chiamata

const calcPage =
  '<form method="GET"><input type="textbox" name="a"><br /><input type="textbox" name="b"><br /><input type="submit" value="Calcola"></form>';

const homePage =
  '<h1> Scegli operazione </h1> <a href="/sum"> Somma </a> <br /> <a href="/sub"> Sottrazione </a> <br/> <a href="/mul"> Moltiplicazione </a> <br /> <a href="/dev"> Divisione </a>';

const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  const my_url = url.parse(req.url, true).pathname;

  res.writeHead(200, { "Content-Type": "text/html" });

  /*VERIFICA CHE I PARAMETRI SIANO TUTTI NUMERI INTERI */
  for (key in params) {
    if (isNaN(params[key])) {
      res.end("Errore: Numero non valido");
      return;
    }
  }

  switch (my_url) {
    case "/home":
      res.write(homePage);
      break;
    case "/sum":
      if (Object.values(params).length >= 2) {
        let sum = MathLibrary.sum(...Object.values(params));
        res.write("La somma e': " + sum);
      } else {
        res.write(calcPage);
      }
      break;
    case "/sub":
      if (Object.values(params).length >= 2) {
        let sub = MathLibrary.sub(params.a, params.b);
        res.write("La sottrazione e': " + sub);
      } else {
        res.write(calcPage);
      }
      break;
    case "/mul":
      if (Object.values(params).length >= 2) {
        let mul = MathLibrary.mul(...Object.values(params));
        res.write("La moltiplicazione e': " + mul);
      } else {
        res.write(calcPage);
      }
      break;
    case "/dev":
      if (Object.values(params).length >= 2) {
        let dev = MathLibrary.dev(params.a, params.b);
        res.write("La divisione e': " + dev);
      } else {
        res.write(calcPage);
      }
      break;
    default:
      res.write(
        "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Home</a></p>"
      );
      break;
  }
  res.end();
});

//in ascolto sulla porta 3000
server.listen(3000);
// sul terminale: node index.js
// sul browser -> localhost:3000
//ctrl+c per interrompere il server
