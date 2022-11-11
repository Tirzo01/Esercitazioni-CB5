/**
 * Accetta due parametri, l'elemento html che si vuole targhettare e un parent da cui prendere l'elemento, il parent default è document
 * @param {*} element
 * @param {*} parent
 * @returns
 */
const $ = (element, parent = document) => {
  return document.querySelector(element);
};

/**
 * Variabili globali
 */
let index = 1;
let APIUrl = "https://pokeapi.co/api/v2/pokemon/";

const pokeContainerEl = $(".poke_container");
const pokeTitleEl = $("h3", pokeContainerEl);
const pokeImgEl = $("img", pokeContainerEl);
const pokeIdEl = $(".id_style", pokeContainerEl);
const pokeTypeEl = $(".type", pokeContainerEl);

const btn_back = $(".btn-back");
const btn_next = $(".btn-next");

const loader = $(".wrapper");

/**
 * Ritorna una promise della response in formato json
 * @param {string} url
 * @returns
 */
const getPokemonAPI = async (url) => {
  loader.classList.toggle("active");
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

/**
 * Crea la card su html con i dati del pokemon passato come parametro
 * @param {*} pokemon
 */
const createPokeCard = (pokemon) => {
  pokeContainerEl.classList = ["poke_container"];
  pokeContainerEl.classList.add(pokemon.types[0].type.name);
  pokeTitleEl.textContent =
    pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokeImgEl.setAttribute(
    "src",
    pokemon.sprites.other.dream_world.front_default
  );
  pokeIdEl.textContent = generateID(pokemon.id);
  pokeTypeEl.textContent = `Type: ${pokemon.types[0].type.name}`;
  loader.classList.toggle("active");
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
  return `#${newID}`;
};

/**
 * Al loading della pagina inserisce il pokemon con id 1 nella card
 */
window.onload = getPokemonAPI(APIUrl + index).then((pokemon) =>
  createPokeCard(pokemon)
);

/**
 * Inserimento dell'evento click dei bottoni per ottenere il pokemon precedente o successivo rispetto all'index
 */
btn_next.addEventListener("click", (event) => {
  incrementUrl();
  getPokemonAPI(APIUrl).then((pokemon) => createPokeCard(pokemon));
});

btn_back.addEventListener("click", (event) => {
  if (index <= 1) return;
  decrementUrl();
  getPokemonAPI(APIUrl).then((pokemon) => createPokeCard(pokemon));
});

/**
 * Incrementa index di 1 e aggiorna l'URL da usare nelle fetch
 */
const incrementUrl = () => {
  index++;
  APIUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
};

/**
 * Decrementa index di 1 e aggiorna l'URL da usare nelle fetch
 */
const decrementUrl = () => {
  index--;
  APIUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
};
