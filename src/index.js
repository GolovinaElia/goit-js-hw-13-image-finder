import './styles.css';

import ImagesApiService from './js/apiService';
import getRefs from './js/get-refs';
import imgCard from './templates/card-img.hbs';

const imagesApiService = new ImagesApiService();
const refs = getRefs();

refs.inputRef.addEventListener('input', onSearch)
refs.btnRef.addEventListener('click', onLoadMore)

function onSearch(event) {
    event.preventDefault();
    clearimgMarkup();
    imagesApiService.query = event.currentTarget.elements.query.value;

//     if (imagesApiService.query === '') {
//         return alert('Please enter your request');
// }
    imagesApiService.resetPage();
    imagesApiService.fetchImages().then(imgMarkup);
}

function onLoadMore() {
imagesApiService.fetchImages().then(imgMarkup);
}

function imgMarkup(hits) {
refs.galleryRef.insertAdjacentHTML('beforeend', imgCard(hits));
}

function clearimgMarkup() {
    refs.galleryRef.innerHTML = '';
}
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
// function imgScroll() {
//     const totalHeight = 
// }