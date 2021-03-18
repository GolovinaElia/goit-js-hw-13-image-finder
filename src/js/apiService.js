export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {
       console.log(this);
     const BASE_URL = 'https://pixabay.com/api/';

    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=20750670-b2684aaeba19f295ef3b80ff2`;

    fetch(url)
        .then(r => r.json())
        .then(data => {
            this.page += 1;
        });
}
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}