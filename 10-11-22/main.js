const containerEl = document.querySelector(".container");
const adviceEl = containerEl.querySelector(".advice");
const btn_advice = containerEl.querySelector("button");
const idEl = containerEl.querySelector(".id");

const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Funzione che restituisce un oggetto slip con id e advice
 * @param {string} url
 */
const getAdvice = (url) => {
  return fetch(url, { cache: "no-cache" }).then((res) =>
    res.json().then((data) => {
      idEl.textContent = `ADVICE #${data.slip.id}`;
      adviceEl.textContent = `"${data.slip.advice}"`;
    })
  );
};

window.document.onload = getAdvice(urlAdvice);
btn_advice.addEventListener("click", (event) => getAdvice(urlAdvice));
