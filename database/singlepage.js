let http = new XMLHttpRequest();

http.open('get', 'database/samsung.json', true);

http.send();
console.log("item");
http.onload = function(){

   if(this.readyState == 4 && this.status == 200){

      let samsung = JSON.parse(this.responseText);

      let output = "";

      for(let item of samsung){
         output += `
         <div class="ProductNameAndPrice" id="json-try">
         <h1 class="ProductName">${item.id}</h1>
         <h1 class="ProductPrice">&#8377 1,23,845</h1>
      </div>
         `;
      }

      document.querySelector("#json-try").innerHTML = output;

   }

}