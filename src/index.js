import './styles.css';

import ImagesApiService from './js/apiService';
import getRefs from './js/get-refs';
import imgCard from './templates/card-img.hbs';

const imagesApiService = new ImagesApiService();
const refs = getRefs();


refs.inputRef.addEventListener('input', onSearch);

function onSearch(event) {
    event.preventDefault();
    imagesApiService.query = event.currentTarget.elements.query.value;

    imagesApiService.resetPage();
    clearImgMarkup();
    imagesApiService.fetchImages().then(hits => {
        imgMarkup(hits);
        imagesApiService.incrementPage();
    });
}

function imgMarkup(hits) {
refs.galleryRef.insertAdjacentHTML('beforeend', imgCard(hits));
}

function clearImgMarkup() {
    refs.galleryRef.innerHTML = '';
}

const imgScroll = () => {
    window.scrollTo({
        top: 0,
  behavior: 'smooth'
});
}
refs.btnRef.addEventListener('click', () => imgScroll());

const onEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            imagesApiService.fetchImages().then(hits => {
        imgMarkup(hits);
        imagesApiService.incrementPage();
    });
        }
    })
}
const options = {
    rootMargin: '200px'
};
const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.scrollRef);