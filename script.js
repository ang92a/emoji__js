import { data } from "./emoji.js";

let newData = data.map(function (obj) {
  return { ...obj, keywords: [...new Set(obj.keywords.split(" "))].join(" ") };
});

let cards = document.getElementById("cards");

function createCard(obj) {
  let article = document.createElement("div");
  article.setAttribute("class", "article");

  let articleImg = document.createElement("p");
  articleImg.textContent = obj.symbol;
  articleImg.setAttribute("class", "article__img");

  let articleTitle = document.createElement("p");
  articleTitle.textContent = obj.title;
  articleTitle.setAttribute("class", "article__title");

  let articleSubtitle = document.createElement("p");
  articleSubtitle.textContent = obj.keywords;
  articleSubtitle.setAttribute("class", "article__subtitle");

  article.append(articleImg, articleTitle, articleSubtitle);
  cards.append(article);
}

function showCards(arr) {
  arr.forEach(createCard);
}

(function main() {
  showCards(newData);
})();

//ПОИСК

// 1. Подписать элемент на событие

let input = document.querySelector(".main__input");
input.addEventListener("input", searchData);

// 2. Назначить функцию

function searchData() {
  let result = newData.filter((obj) => obj.title.includes(input.value));
  cards.innerHTML = "";
  showCards(result);
}
