import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import newCard from './js/apiService';
import refs from './js/refs';
import './js/pagination'
import onImgClick from './js/getFullSize';
import 'bootstrap/dist/css/bootstrap.min.css';
import renderItems from './js/render'
import './js/pagination2'

refs.formRef.addEventListener('submit', galleryOnSubmit);
refs.galleryRef.addEventListener('click', onImgClick);
refs.paginationRef.addEventListener('click', onPaginationsBtnClick)

function galleryOnSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newCard.query = form.elements.query.value;

  refs.galleryRef.innerHTML = '';
  form.reset();
  newCard.reset();  
  renderItems();
  refs.paginationRef.style.display = 'block'
  // refs.pagLastChildRef.style.display = 'none'

}


function onPaginationsBtnClick(e) {
  
  console.log(e.target.textContent)
  // console.log(refs.testRef)


  if(e.target.tagName !== "A" && "SPAN") {
    return
  }

  refs.galleryRef.innerHTML = '';

  // if(e.target === refs.pagLastChildRef) {
  //   return
  // }

  if(e.target.textContent === '...' ) {
    newCard.page += 3
    // console.log(refs.pagLastChildRef)
    return renderItems();
  }


  if(e.target.textContent === 'first') {
  newCard.reset()
  return renderItems();
  }

  if(e.target.textContent === 'last') {
  newCard.newPage = 42;
  return renderItems();
  }

  if(e.target.textContent === 'prev') {
  newCard.page -=  1
  return renderItems();
  }


  if(e.target.textContent === 'next') {
  newCard.page +=  1
  return renderItems();
  }


  newCard.newPage = Number(e.target.textContent)
  renderItems();
 
}
