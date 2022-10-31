import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createCalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup )

function createCalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
        })
    .join(' ');

};

let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});

