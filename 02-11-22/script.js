const bodyEl = document.querySelector("body");
container = undefined;
most_popular = undefined;
top_seller = undefined;

const createNav = (title, list) => {
  const navElement = document.createElement("nav");
  const navTitle = document.createElement("h3");
  navTitle.textContent = "Titolo";
  const navList = document.createElement("ul");
  const navItems = [];
  list.forEach((item) => {
    navItems.push(document.createElement("li"));
    navItems[navItems.length - 1].textContent = item;
  });

  bodyEl.appendChild(navElement);
  navElement.append(navTitle, navList);
  navItems.forEach((item) => navList.appendChild(item));
};

const createHero = (title, img, desc) => {
  const heroElement = document.createElement("div");
  heroElement.classList = "hero_image";
  const heroText = document.createElement("div");
  heroText.classList = "hero_text";
  const heroTitle = document.createElement("h1");
  heroTitle.textContent = title;
  const heroDesc = document.createElement("p");
  heroDesc.textContent = desc;

  bodyEl.appendChild(heroElement);
  heroElement.appendChild(heroText);
  heroText.append(heroTitle, heroDesc);
};

const createContainer = () => {
  const container = document.createElement("div");
  container.classList = "container";
  bodyEl.appendChild(container);
  return container;
};

const createMostPopular = (title, parent) => {
  const mostPopular = document.createElement("div");
  mostPopular.classList = "most_popular";
  bodyEl.appendChild(mostPopular);
  const mostPopularTitle = document.createElement("h2");
  mostPopularTitle.textContent = title;
  mostPopular.appendChild(mostPopularTitle);
  return mostPopular;
};

const createTopSeller = (title, parent) => {
  const topSeller = document.createElement("div");
  topSeller.classList = "most_popular";
  bodyEl.appendChild(topSeller);
  const topSellerTitle = document.createElement("h2");
  topSellerTitle.textContent = title;
  topSeller.appendChild(topSellerTitle);
  return topSeller;
};

const createCard = (title, thumbnail, description, parent) => {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;
  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", thumbnail);
  const descEl = document.createElement("p");
  descEl.textContent = description;

  parent.appendChild(cardEl);
  cardEl.append(titleEl, imageEl, descEl);
};

const createFooter = (title) => {
  const footer = document.createElement("footer");
  bodyEl.appendChild(footer);
  const titleFooter = document.createElement("h2");
  titleFooter.textContent = title;
  footer.appendChild(titleFooter);
};

createNav("ciao", ["Home", "Most Popular", "Best Seller"]);
createHero("Il tuo Negozio", "./img/hero.jpg", "Acquista dai migliori marchi");
container = createContainer();
most_popular = createMostPopular("Most popular", container);
top_seller = createTopSeller("Top Seller", container);
createFooter("Powered by Edgemony");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.filter((product) => {
      product.price < 20 &&
        createCard(
          product.title,
          product.thumbnail,
          product.description,
          most_popular
        );
    })
  );

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.filter((product) => {
      product.price > 500 &&
        createCard(
          product.title,
          product.thumbnail,
          product.description,
          top_seller
        );
    })
  );
