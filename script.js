import { data } from "./emoji.js";

data.forEach(createCard);

let obj = {
  symbol: "💯",
  title: "100",
  keywords: "Hundred, points, symbol, wow, win, perfect, parties",
};

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
  document.getElementById("cards").append(article);
}

createCard(obj);
