import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>; */}

// Создаем разметку карточек
const myGallery = [];
for (let index = 0; index < 9; index++) {
    let elementA = document.createElement("a");
    elementA.classList.add("gallery__item");
    elementA.href = `${galleryItems[index].original}`;

    let elementImg = document.createElement("img");
    elementImg.classList.add("gallery__image");
    elementImg.src = `${galleryItems[index].preview}`;
    elementImg.alt = `${galleryItems[index].description}`;
    elementImg.title = `${galleryItems[index].description}`;

    elementA.appendChild(elementImg);

    // console.log(elementA);
    // console.log(elementImg);
    myGallery.push(elementA);
}

// Добавляем созданную карточку в html
const ulEl = document.querySelector(".gallery");
ulEl.append(...myGallery);

var lightbox = new SimpleLightbox(".gallery a", {
    // captionsData
});

