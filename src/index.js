import './styles.css';

import ImagesApiService from './js/apiService';
import getRefs from './js/get-refs';
const imagesApiService = new ImagesApiService();
const refs = getRefs();

refs.inputRef.addEventListener('input', onSearch)
refs.buttonRef.addEventListener('click', onLoadMore)
let searchQuery;
function onSearch(e) {
    e.preventDefault();
    imagesApiService.query = e.currentTarget.elements.query.value;
    imagesApiService.fetchImages();
}

function onLoadMore() {
imagesApiService.fetchImages();
}