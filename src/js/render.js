import newCard from './apiService'
import refs from './refs'
import markup from './markup';


function render() {
    newCard.fetchCard().then(({hits}) => {
        refs.galleryRef.insertAdjacentHTML('afterbegin', markup(hits))
    })
}



 

export default  render;