import { c, q, GET, POST, DELETE, PATCH, uuidv4 } from "./utils.js";

const pokeListEl = q(".poke__list");
const pokeForm = document.forms.pokeform;
const pokeFormElements = pokeForm.elements;

const pokeFormEdit = document.forms.pokeform_edit;
const pokeFormEditElements = pokeFormEdit.elements;

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

pokeFormEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: pokeFormEditElements.ID.value,
    name: pokeFormEditElements.pokeName.value,
    type: pokeFormEditElements.pokeType.value,
  };
  PATCH("http://localhost:3000/pokemon", data.id, data);
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
  const buttonsBox = c("div");
  const edit_btn = c("button");
  const delete_btn = c("button");
  row.classList = "row";
  imgBox.classList = "imgBox";
  id.textContent = index;
  name.textContent = pokemon.name;
  name.classList = "pokeName";
  type.textContent = pokemon.type;
  buttonsBox.classList = "buttonsBox";
  delete_btn.textContent = "Elimina";
  edit_btn.textContent = "Modifica";
  edit_btn.classList = "edit-btn";
  delete_btn.classList = "delete-btn";

  edit_btn.addEventListener("click", (event) => {
    pokeFormEditElements.ID.value = pokemon.id;
    pokeFormEditElements.pokeName.value = name.textContent;
    pokeFormEditElements.pokeType.value = type.textContent;
  });

  delete_btn.addEventListener("click", (event) => {
    DELETE("http://localhost:3000/pokemon", pokemon.id);
  });
  pokeListEl.append(row);
  buttonsBox.append(edit_btn, delete_btn);
  row.append(imgBox, name, id, type, buttonsBox);
};
