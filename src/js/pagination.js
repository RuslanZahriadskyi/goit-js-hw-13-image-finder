import refs from './refs'
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

 const paganation = new Pagination(refs.paginationRef, { 
    totalItems:500,
    itemsPerPage: 12,
    visiblePages: 5,
    centerAlign: true
  });

  paganation.on('afterMove', function(evt) {
    var currentPage = evt.page;
});


  export default paganation;