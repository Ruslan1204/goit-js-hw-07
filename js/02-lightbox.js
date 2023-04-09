import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ul = document.querySelector(".gallery");
console.log(ul);

const elm = galleryItems
  .map(
    ({ preview, original, description }) =>
      `  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="" title= "${description}"
    />
  </a>
</li>`
  )
  .join("");

ul.insertAdjacentHTML("beforeend", elm);

 new SimpleLightbox(".gallery__item a", {captionPosition: 'bottom',captionDelay: 250});

