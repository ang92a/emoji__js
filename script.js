import { data } from "./emoji.js";  // импорт массива из файла js

let newData = data.map(function (obj) {
  return { ...obj, keywords: [...new Set(obj.keywords.split(" "))].join(" ") };
});  // исключаем повторы в словах

let cards = document.getElementById("cards");
let input = document.querySelector(".main__input");

// Отрисовывает одну карточку
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

// Отрисовывает все карточки
function showCards(arr) {
  arr.forEach(createCard);
}

// Точка входа
(function main() {
  showCards(newData);
})();

//ПОИСК

// 1. Подписать элемент на событие

input.addEventListener("input", searchData);

// 2. Назначить функцию

function searchData() {
  let result = newData.filter(
    (obj) =>
      obj.title.toLowerCase().includes(input.value.toLowerCase().trim()) ||
      obj.keywords.toLowerCase().includes(input.value.toLowerCase().trim())
  ); // Фильтруем массив (новый без повторов) Метод includes находит подстроку!!!! Не строгое сравнение, не чувствительный к региству, обрезает пробелы
  cards.innerHTML = ""; // очищяем наш контейнер где лежат карточки
  showCards(result); // передаем новый массив в функцию, которая отрисовывает все карточки
}
