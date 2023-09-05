const http = new XMLHttpRequest();

http.open('get', 'database/product.json', true);

http.send();

http.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let products = JSON.parse(this.responseText);

      let output = "";

      for(let item of products){
         output += `
         <a href="product (1).html" class="trending-card">
         <img src="../logo/NEXT GEN LOGO PNG.png"  alt="" class="trending-card-logo">
               <img src="${item.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${item.title}</p>
                  <div class="price-and-color">
                  <h1 class="price-trending">${item.price}</h1>
                     <div class="fas-icon-section">
                        <i id="icon-fas" class="fa-solid fa-heart"></i>
                        <i id="icon-fas" class="fa-regular fa-eye"></i>
                        <i id="icon-fas" class="fa-solid fa-code-compare"></i>
                     </div>
                     </div>
                     <button class="Add-to-cart-button">add to card</button>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingMobilePage").innerHTML = output;

   }

}




const https = new XMLHttpRequest();

https.open('get', 'database/watch.json', true);

https.send();

https.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let watchs = JSON.parse(this.responseText);

      let output = "";

      for(let WItem of watchs){
         output += `
         <a href="product (1).html" class="trending-card">
         <img src="../logo/NEXT GEN LOGO PNG.png"  alt="" class="trending-card-logo">
               <img src="${WItem.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${WItem.title}</p>
                  <div class="price-and-color">
                  <h1 class="price-trending">${WItem.price}</h1>
                     <div class="fas-icon-section">
                        <i id="icon-fas" class="fa-solid fa-heart"></i>
                        <i id="icon-fas" class="fa-regular fa-eye"></i>
                        <i id="icon-fas" class="fa-solid fa-code-compare"></i>
                     </div>
                     </div>
                     <button class="Add-to-cart-button">add to card</button>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingWatchPage").innerHTML = output;

   }

}



const LHttps = new XMLHttpRequest();

LHttps.open('get', 'database/laptop.json', true);

LHttps.send();

LHttps.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let laptops = JSON.parse(this.responseText);

      let output = "";

      for(let LItem of laptops){
         output += `
         
         <a href="product (1).html" class="trending-card">
         <img src="../logo/NEXT GEN LOGO PNG.png"  alt="" class="trending-card-logo">
               <img src="${LItem.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${LItem.title}</p>
                  <div class="price-and-color">
                  <h1 class="price-trending">${LItem.price}</h1>
                     <div class="fas-icon-section">
                        <i id="icon-fas" class="fa-solid fa-heart"></i>
                        <i id="icon-fas" class="fa-regular fa-eye"></i>
                        <i id="icon-fas" class="fa-solid fa-code-compare"></i>
                     </div>
                     </div>
                     <button class="Add-to-cart-button">add to card</button>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingLaptopPage").innerHTML = output;

   }

}