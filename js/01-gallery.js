import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createMarkup(array) {
  const imagesList = array.map(({ preview, original, desription }) => 
  `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${desription}"
    />
  </a>
</li>
  `).join('');
  gallery.innerHTML = imagesList;
  gallery.addEventListener('click', handleClick);
  
  function handleClick(event) {
    event.preventDefault();
    const originalImage = event.target.getAttribute('data-source')
    
    const instance = basicLightbox.create(`<img src="${originalImage}" width="800" height="600">`)
    instance.show()
    window.addEventListener("keydown", (event)=>{
      if(event.key=== 'Escape'){
        instance.close()
      }
    })
    
  }
}

createMarkup(galleryItems)



