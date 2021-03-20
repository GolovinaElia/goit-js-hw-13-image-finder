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

function onSearch(event) {
    event.preventDefault();
    imagesApiService.query = event.currentTarget.elements.query.value;
    clearImgMarkup();
    loadMoreBtn.show();
    imagesApiService.resetPage();
    clearImgMarkup();
    fetchHits();

    if (imagesApiService.query === '') {
        return alert('Please enter your request');
}
};

function fetchHits() {
 loadMoreBtn.disable();
    imagesApiService.fetchImages().then(hits => {
        imgMarkup(hits);
        loadMoreBtn.enable();
    });
};

function imgMarkup(hits) {
refs.galleryRef.insertAdjacentHTML('beforeend', imgCard(hits));
}

function clearImgMarkup() {
    refs.galleryRef.innerHTML = '';
}

const imgScroll = (event) => {
    const totalHeight = document.documentElement.clientHeight * imagesApiService.page;
    i = event || 0;
    if (i < totalHeight) {
        setTimeout(() => {
            window.scrollTo(0, i);
            window.scrollTo({
  behavior: 'smooth'
});
            imgScroll(i + 12);
        }, 24)
    }
}
loadMoreBtn.refs.button.addEventListener('click', () => imgScroll());