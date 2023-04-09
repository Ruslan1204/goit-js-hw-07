import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");

ul.addEventListener("click", onClick);

const elements = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`
  )
  .join("");

ul.insertAdjacentHTML("beforeend", elements);

function onClick(evt) {
  evt.preventDefault();
    const instance = basicLightbox.create(`
  <img src= ${evt.target.dataset.source}>
  `);
  console.log("instance.show() ->", instance.show());
}