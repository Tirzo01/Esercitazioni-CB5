fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((res) => res.json())
  .then((data) =>
    data.results.forEach((element) =>
      fetch(element.url).then((res2) =>
        res2.json().then((data2) => createPokeCard(data2))
      )
    )
  );
const poke_container = document.querySelector(".poke_container");
const createPokeCard = (pokemon) => {
  console.log(pokemon);
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const idEl = document.createElement("p");
  const titleEl = document.createElement("h3");
  const typeEl = document.createElement("p");

  cardEl.classList.add("card");
  imgEl.setAttribute("src", pokemon.sprites.front_default);
  idEl.textContent = `#${pokemon.id}`;
  idEl.classList.add("id_style");
  const formatted_name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  titleEl.textContent = `${formatted_name}`;
  typeEl.textContent = `Type: ${pokemon.types[0].type.name}`;

  switch (pokemon.types[0].type.name) {
    case "electric":
      cardEl.style = "background-color: #FCF7DE";
      break;
    case "water":
      cardEl.style = "background-color: #DEF3FD";
      break;
    case "ground":
      cardEl.style = "background-color: #f4e7da";
      break;
    case "rock":
      cardEl.style = "background-color: #d5d5d4";
      break;
    case "fairy":
      cardEl.style = "background-color: #fceaff";
      break;
    case "poison":
      cardEl.style = "background-color: #98d7a5";
      break;
    case "bug":
      cardEl.style = "background-color: #f8d5a3";
      break;
    case "dragon":
      cardEl.style = "background-color: #97b3e6";
      break;
    case "psychic":
      cardEl.style = "background-color: #eaeda1";
      break;
    case "flying":
      cardEl.style = "background-color: #F5F5F5";
      break;
    case "fighting":
      cardEl.style = "background-color: #E6E0D4";
      break;
    case "normal":
      cardEl.style = "background-color: #F5F5F5";
      break;
    case "fire":
      cardEl.style = "background-color: #FDDFDF";
      break;
    case "grass":
      cardEl.style = "background-color: #DEFDE0";
      break;
    case "ghost":
      cardEl.style = "background-color: #705898";
      break;
    case "ice":
      cardEl.style = "background-color: #98d8d8";
      break;
  }

  poke_container.append(cardEl);
  cardEl.append(imgEl, idEl, titleEl, typeEl);
};

// fetch(data.result.url).then((pokemon) => console.log(pokemon));
