const galleryList = document.querySelector(".gallery");
const galleryListItem = getImgItem(images);
galleryList.insertAdjacentHTML('beforeend', galleryListItem);  
    
   function getImgItem() {
       return images.map(({ preview, original, description }) => {
          return  `<li class="gallery-item">
  <a class="gallery-link" href=${original}>
    <img
      class="gallery-image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`}).join('');
   } 