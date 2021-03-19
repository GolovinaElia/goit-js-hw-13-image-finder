import './styles.css';

import ImagesApiService from './js/apiService';
import getRefs from './js/get-refs';
import imgCard from './templates/card-img.hbs';
import LoadMoreBtn from './js/load-btn';

const imagesApiService = new ImagesApiService();
const refs = getRefs();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true
});

refs.inputRef.addEventListener('input', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);
refs.scrollImg.addEventListener('click', imgScroll);

function onSearch(event) {
    event.preventDefault();
    imagesApiService.query = event.currentTarget.elements.query.value;
    clearimgMarkup();
    loadMoreBtn.show();
    imagesApiService.resetPage();
    clearimgMarkup();
    fetchHits();

    if (imagesApiService.query === '') {
        return alert('Please enter your request');
}
}

function fetchHits() {
 loadMoreBtn.disable();
    imagesApiService.fetchImages().then(hits => {
        imgMarkup(hits);
        loadMoreBtn.enable();
    });
}

function imgMarkup(hits) {
refs.galleryRef.insertAdjacentHTML('beforeend', imgCard(hits));
}

function clearimgMarkup() {
    refs.galleryRef.innerHTML = '';
}

function imgScroll(e) {
    e.preventDefault();
    const blockID
    // body.animate({ scrollTop: 0 }, 800);
    // html.animate({ scrollTop: 0 }, 800);
}