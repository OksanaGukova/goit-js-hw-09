import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{S as p}from"./assets/vendor-10cb7c31.js";const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery"),s=l();n.insertAdjacentHTML("beforeend",s);function l(){return i.map(({preview:e,original:o,description:a})=>`<li class="gallery-item">
  <a class="gallery-link" href=${o}>
    <img
      class="gallery-image"
      src=${e}
      alt=${a}
    />
  </a>
</li>`).join("")}new p(".gallery a",{captionsData:"alt",captionsDelay:250});const t=document.querySelector(".gallery");t.style.display="flex";t.style.flexDirection="row";t.style.flexWrap="wrap";t.style.gap="24px";t.style.padding="0";t.style.listStyle="none";t.style.marginLeft="auto";t.style.marginRight="auto";t.style.justifyContent="center";t.style.marginTop="100px";t.style.maxWidth="1128px";const c=document.querySelectorAll(".gallery-image");c.forEach(e=>{e.style.height="200px"});
//# sourceMappingURL=commonHelpers.js.map