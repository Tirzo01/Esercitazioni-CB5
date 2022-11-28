function call_op(a, b, operation) {
  const url = `http://localhost:3000/${operation}?a=${a}&b=${b}`;
  const GET = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };
  return GET(url);
}

const numEl = document.getElementById("num");

const opEl = document.getElementsByClassName("operations__btn");

const send_btn = document.getElementById("send-btn");

const resEl = document.getElementById("res");

let nums = {
  a: null,
  op: null,
  b: null,
  selected_button: null,
};

/**
 * Gestione Eventi
 */

send_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (nums.a != null && nums.op != null) {
    if (!isNaN(parseInt(numEl.value))) {
      nums.b = parseInt(numEl.value);
      nums.selected_button.classList.remove("active_op");
      /*parte la fetch */
      call_op(nums.a, nums.b, nums.op).then((res) => {
        if (res.result != null) {
          resEl.classList = "visible";
          resEl.textContent = "Risultato: " + res.result;
        } else {
          resEl.classList.add("error");
          resEl.textContent = "Operazione non valida.";
        }
      });
      nums.a = null;
      nums.op = null;
      nums.b = null;
      nums.selected_button = null;
      numEl.value = "";
    } else {
      console.log("Inserire un numero valido!");
    }
  } else {
    console.log("Nessun operazione inserita");
  }
});

Array.from(opEl).forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (nums.a == null) {
      if (!isNaN(parseInt(numEl.value))) {
        nums.a = parseInt(numEl.value);
        numEl.value = "";
        element.classList.add("active_op");
        nums.op = element.value;
        nums.selected_button = element;
      } else {
        console.log("Inserire un numero valido!");
      }
    } else {
      if (!isNaN(parseInt(numEl.value))) {
        nums.b = parseInt(numEl.value);
      } else {
        console.log("Inserire un numero valido!");
      }
    }
  });
});
