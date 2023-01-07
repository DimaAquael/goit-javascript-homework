import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

let myItems = [];
for (let index = 0; index < galleryItems.length; index++) {
  let element = `<div class="gallery__item">
  <img class="gallery__image" loading="lazy" src="${galleryItems[index].preview}" data-source="${galleryItems[index].original}" alt="${galleryItems[index].description}" />
  </div>`;
  myItems.push(element);
}
{/* <a class="gallery__link" href="${galleryItems[index].original}" target="_parent">
    </a> */}

// console.log(myItems);
// console.log(myItems.join(" "));

let message = myItems.join("");

galleryEl.innerHTML = message;

// Добавление клика
galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(
    `<img
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`
  );

  instance.show();

  // Отключение модального окна по ESC
 const onEscKeydown = (event) => {
    if (event.code === "Escape") {
      instance.close();
      console.log("Нажали Escape");
      document.removeEventListener("keydown", onEscKeydown);
    }
  };
  document.addEventListener("keydown", onEscKeydown);
};


