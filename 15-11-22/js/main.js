import { c, q, GET, POST, uuidv4 } from "./utils.js";

const pokeListEl = q(".poke__list");
const pokeForm = document.forms.pokeform;
const pokeFormElements = pokeForm.elements;

pokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: pokeFormElements.pokeName.value,
    type: pokeFormElements.pokeType.value,
  };

  console.log(JSON.stringify(data));

  POST("http://localhost:3000/pokemon", data).then((res) => console.log(res));
});

window.onload = (e) => {
  GET("http://localhost:3000/pokemon").then((res) => {
    let index = 1;
    res.map((pokemon) => {
      createRow(pokemon, index);
      index++;
    });
  });
};

const createRow = (pokemon, index) => {
  const row = c("div");
  const id = c("p");
  const name = c("p");
  const type = c("p");
  row.classList = "row";
  id.textContent = index;
  name.textContent = pokemon.name;
  type.textContent = pokemon.type;
  pokeListEl.append(row);
  row.append(id, name, type);
};
