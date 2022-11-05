const plans = [
  {
    category: "Starter",
    price: 1.99,
    desc: "Perfetto per iniziare al meglio",
    storage: {
      quantity: 500,
      type: "MB",
    },
    domine: 1,
    email_accounts: 100,
    databases: 1,
    bandwidth: {
      quantity: 100,
      type: "GB",
    },
    sells: 100,
  },
  {
    category: "Business",
    price: 3.99,
    desc: "Ottimo per progetti reali",
    storage: {
      quantity: 2,
      type: "GB",
    },
    domine: 5,
    email_accounts: 500,
    databases: 5,
    bandwidth: {
      quantity: 500,
      type: "GB",
    },
    sells: 4320,
  },
  {
    category: "Enterprise",
    price: 9.99,
    desc: "Piano avanzato per imprese medio alte",
    storage: {
      quantity: 10,
      type: "GB",
    },
    domine: "unlimited",
    email_accounts: "unlimited",
    databases: "unlimited",
    bandwidth: {
      quantity: 1,
      type: "TB",
    },
    sells: 876,
  },
];

const bodyEl = document.querySelector("body");
const cardsContainerEl = document.querySelector(".cards_container");

const createCard = (plan, special) => {
  const cardEl = document.createElement("div");
  if (special) cardEl.classList.add("special_card");
  else cardEl.classList.add("card");

  const card_headEl = document.createElement("div");
  card_headEl.classList.add("card__head");
  const ribbonEl = document.createElement("span");
  const categoryEl = document.createElement("h2");
  const priceEl = document.createElement("h2");
  const descEl = document.createElement("p");
  categoryEl.textContent = plan.category;
  priceEl.textContent = "€" + plan.price + "/mese";
  descEl.textContent = plan.desc;

  const card_bodyEl = document.createElement("div");
  card_bodyEl.classList.add("card_body");
  const storageEl = document.createElement("p");
  const domineEl = document.createElement("p");
  const email_accountsEl = document.createElement("p");
  const databasesEl = document.createElement("p");
  const bandwidthEl = document.createElement("p");
  const buttonEl = document.createElement("button");
  if (special) buttonEl.classList.add("special_order_now_button");
  else buttonEl.classList.add("order_now_button");
  storageEl.textContent =
    plan.storage.quantity + " " + plan.storage.type + " Storage";
  domineEl.textContent = plan.domine + " Dominio Personalizzato";
  email_accountsEl.textContent = plan.email_accounts + " Account Email";
  databasesEl.textContent = plan.databases + " Database";
  bandwidthEl.textContent =
    plan.bandwidth.quantity + " " + plan.bandwidth.type + " Bandwidth/Mensile";
  buttonEl.textContent = "Ordina ora";

  cardsContainerEl.append(cardEl);
  cardEl.append(card_headEl, card_bodyEl, buttonEl);
  if (special) card_headEl.append(ribbonEl, categoryEl, priceEl, descEl);
  else card_headEl.append(categoryEl, priceEl, descEl);
  card_bodyEl.append(
    storageEl,
    domineEl,
    email_accountsEl,
    databasesEl,
    bandwidthEl
  );
};

function getBestSellerPlan(plans) {
  let best = -Infinity;
  let best_plan = {};
  for (let plan of plans) {
    if (plan.sells > best) {
      best = plan.sells;
      best_plan = plan;
    }
  }
  return best_plan;
}

best_seller_plan = getBestSellerPlan(plans);

plans.forEach((plan) => {
  if (plan === best_seller_plan) createCard(plan, true);
  else createCard(plan, false);
});
