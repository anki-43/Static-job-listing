 let adElement = document.querySelectorAll(".ad");

 for(let i=0; i<adElement.length; i++){
     let count = 0;
     adElement[i].addEventListener("click", function(){
         count++;
         if(count%2!=0){
            adElement[i].classList.add("bigger");
         }else{
            adElement[i].classList.remove("bigger");
         }
       
     })
 }

 