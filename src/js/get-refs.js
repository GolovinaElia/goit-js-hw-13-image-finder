export default function getRefs() {
    return {
        inputRef: document.querySelector('#search-form'),
        buttonRef: document.querySelector('[data-action="load-more"]')
    };
}