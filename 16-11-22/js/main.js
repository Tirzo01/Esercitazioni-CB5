import { c, q, GET, POST, DELETE, uuidv4 } from "./utils.js";

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
  const imgBox = c("div");
  const id = c("p");
  const name = c("p");
  const type = c("p");
  const delete_btn = c("button");
  row.classList = "row";
  imgBox.classList = "imgBox";
  id.textContent = index;
  name.textContent = pokemon.name;
  name.classList = "pokeName";
  type.textContent = pokemon.type;
  delete_btn.textContent = "Elmina";
  delete_btn.classList = "delete-btn";
  delete_btn.addEventListener("click", (event) => {
    DELETE("http://localhost:3000/pokemon", pokemon.id);
  });
  pokeListEl.append(row);
  row.append(imgBox, name, id, type, delete_btn);
};
