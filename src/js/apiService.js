const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20750670-b2684aaeba19f295ef3b80ff2';

export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.hits = [];
    }
     fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json())
        .then(({ hits }) => {
            this.incrementPage();
            return hits;
        })
         .catch()
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
         this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}