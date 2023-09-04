let http = new XMLHttpRequest();

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
                  <p class="trending-card-description">${item.description}</p>
                  <div class="price-and-color">
                     <div class="">
                        <h1 class="price-trending">${item.price}</h1>
                     </div>
                  </div>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingMobilePage").innerHTML = output;

   }

}




let https = new XMLHttpRequest();

https.open('get', 'database/watch.json', true);

https.send();

https.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let watchs = JSON.parse(this.responseText);

      let output = "";

      for(let item of watchs){
         output += `
         <a href="product (1).html" class="trending-card">
         <img src="../logo/NEXT GEN LOGO PNG.png"  alt="" class="trending-card-logo">
               <img src="${item.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${item.title}</p>
                  <p class="trending-card-description">${item.description}</p>
                  <div class="price-and-color">
                     <div class="">
                        <h1 class="price-trending">${item.price}</h1>
                     </div>
                  </div>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingWatchPage").innerHTML = output;

   }

}



let LHttps = new XMLHttpRequest();

LHttps.open('get', 'database/laptop.json', true);

LHttps.send();

LHttps.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let laptops = JSON.parse(this.responseText);

      let output = "";

      for(let item of laptops){
         output += `
         <a href="product (1).html" class="trending-card">
         <img src="../logo/NEXT GEN LOGO PNG.png"  alt="" class="trending-card-logo">
               <img src="${item.img}"  alt="" class="trending-card-img">
               <div class="trending-card-detail">
                  <p class="trending-card-title-name">${item.title}</p>
                  <p class="trending-card-description">${item.description}</p>
                  <div class="price-and-color">
                     <div class="">
                        <h1 class="price-trending">${item.price}</h1>
                     </div>
                  </div>
               </div>
            </a>
         `;
      }

      document.querySelector("#trendingLaptopPage").innerHTML = output;

   }

}