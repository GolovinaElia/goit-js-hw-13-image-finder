export default function getRefs() {
    return {
        inputRef: document.querySelector('#search-form'),
        galleryRef: document.querySelector('.gallery'),
        btnRef: document.querySelector('.btn-form'),
        scrollRef: document.querySelector('#scroll')
    };
}