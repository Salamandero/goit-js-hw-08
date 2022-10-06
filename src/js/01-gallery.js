// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function createGal(array) {
  return array.reduce((acc, item) =>
    acc + `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, "");
}

 
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML('beforeend', createGal(galleryItems));


const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt' });
lightbox.on('show.simplelightbox', function () {
	// do something…
});

lightbox.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});