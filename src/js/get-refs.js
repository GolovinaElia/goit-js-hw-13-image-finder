export default function getRefs() {
    return {
        inputRef: document.querySelector('#search-form'),
        btnRef: document.querySelector('[data-action="load-more"]'),
        galleryRef: document.querySelector('.gallery')
    };
}