function call_sub(a, b) {
  const url = `http://localhost:3000/sottrazione?a=${a}&b=${b}`;
  const GET = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };
  return GET(url);
}

const containerEl = document.querySelector(".container");
const form = document.forms.mainForm;
const send_btn = document.getElementById("send-btn");

const resultTitle = document.querySelector(".hidden");

send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Cliccato");
  call_sub(form.elements.a.value, form.elements.b.value).then((res) => {
    if (res.result === "Errore") {
      resultTitle.textContent = "Errore nell'operazione";
      resultTitle.className = "error";
    } else {
      resultTitle.textContent = "Il risultato è " + res.result;
      resultTitle.className = "visible";
    }
  });
});
