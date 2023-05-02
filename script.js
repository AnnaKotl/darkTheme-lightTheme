const themeToggleBtn = document.querySelector(".theme-toggle");
const pageBody = document.querySelector("body");

themeToggleBtn.addEventListener("click", function () {
  pageBody.classList.toggle("light-theme");
  pageBody.classList.toggle("dark-theme");
});

// Цей код використовує метод classList.toggle()
// для додавання або видалення класів на елементі, який представляє тіло HTML-сторінки. За допомогою цього коду ви можете переключати теми, натискаючи на кнопку з класом .theme-toggle.

// 

// В обраний елемент кнопки потрібно добавити обробник подій на клік, який буде відповідати за зміну теми. У функції, яка буде викликатись при кліку, потрібно змінити поточну тему на протилежну і додати відповідні класи до сторінки.
// Наприклад, якщо кнопка має клас "theme-toggle", то її обробник подій може виглядати так:

const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
});

// У цьому прикладі при кліку на кнопку з класом "theme-toggle" змінюється клас body на "light-theme" або "dark-theme", залежно від поточної теми. За допомогою цих класів можна змінювати стилі всіх елементів на сторінці згідно з вибраною темою.
