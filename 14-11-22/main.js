/**
 * Accetta due parametri, l'elemento html che si vuole targhettare e un parent da cui prendere l'elemento, il parent default è document
 * @param {*} element
 * @param {*} parent
 * @returns
 */
const $ = (element, parent = document) => {
  return parent.querySelector(element);
};

/**
 * Variabili globali
 */
let index = 1;
let APIUrl = "https://jsonplaceholder.typicode.com/posts/";

const postContainerEl = $(".post_container");
const postTitleEl = $(".title", postContainerEl);
const postIdEl = $(".id", postContainerEl);
const postBodyEl = $(".body", postContainerEl);

const btn_back = $(".btn-back");
const btn_next = $(".btn-next");

const loader = $(".wrapper");

/**
 * Ritorna una promise della response in formato json
 * @param {string} url
 * @returns
 */
const GET = async (url) => {
  let response = await fetch(url, { cache: "no-store" });
  let data = await response.json();
  return data;
};

/**
 * Crea la card su html con i dati del post passato come parametro
 * @param {*} post
 */
const createPostCard = (post) => {
  postTitleEl.textContent = post.title;
  postIdEl.textContent = "ID " + generateID(post.id);
  postBodyEl.textContent = post.body;
  //   loader.classList.toggle("active");
};

/**
 * Formatta l'id da inserire nel paragrafo
 * @param {*} id
 * @returns
 */
const generateID = (id) => {
  let newID = id;
  if (id < 9) newID = `00${id}`;
  else if (id < 99) newID = `0${id}`;
  return `${newID}`;
};

/**
 * Al loading della pagina inserisce il post con id 1 nella card
 */
window.onload = GET(APIUrl + index).then((post) => createPostCard(post));

/**
 * Inserimento dell'evento click dei bottoni per ottenere il pokemon precedente o successivo rispetto all'index
 */
btn_next.addEventListener("click", (event) => {
  btn_back.removeAttribute("disabled", "");
  incrementUrl();
  loader.classList.toggle("active");
  GET(APIUrl).then((post) => {
    createPostCard(post);
    loader.classList.toggle("active");
  });
});

btn_back.addEventListener("click", (event) => {
  decrementUrl();
  if (index == 1) {
    btn_back.setAttribute("disabled", "");
  }
  loader.classList.toggle("active");
  GET(APIUrl).then((post) => {
    createPostCard(post);
    loader.classList.toggle("active");
  });
});

/**
 * Incrementa index di 1 e aggiorna l'URL da usare nelle fetch
 */
const incrementUrl = () => {
  index++;
  APIUrl = `https://jsonplaceholder.typicode.com/posts/${index}`;
};

/**
 * Decrementa index di 1 e aggiorna l'URL da usare nelle fetch
 */
const decrementUrl = () => {
  index--;
  APIUrl = `https://jsonplaceholder.typicode.com/posts/${index}`;
};
