const url = 'https://pixabay.com/api/';
const apiKey = '19598883-8e8293d515495519269109cc8';


export default {
  searchQuery: '',
  page: 1,
  perPage: 12,
  fetchCard() {
    const search = `${url}?image_type=photo&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&orientation=horizontal&key=${apiKey}`;

    return fetch(search)
      .then(res => res.json())
      .then(({ hits,totalHits }) => {
        // this.page += 1;
        // this.total = total
        // console.log(this.total)
        return {hits, totalHits}
      });
  },

  reset() {
    this.page = 1;
  },

  // set icrement(value) {
  //   return this.page - value
  // },

  get totalItems() {
    return this.total
  },

  set totalItems(value) {
    this.total = value
  },

  get newPage() {
    return this.page
  },

  set newPage(value) {
    this.page = value
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
