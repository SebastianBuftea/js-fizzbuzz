//creiamo una variabile facente riferimento al tag da modificare 
 let listpoint= document.querySelector("ul");

 //dichiariamo la variabile li
 let li;

 // creiamo un ciclo che conti 100 numeri 
 for(let i=1 ; i<=100; i++) {

    /* ci poniamo le domande iniziando da:
     il numero che abbiamo è divisibile per 3 e per 5?
     altrimenti se per 3, altrimenti se per 5  */  
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");   
        li= `<li> FizzBuzz</li>`;
    }
    else if(i%3==0){
        console.log("Fizz");
        li= `<li>Fizz</li>`;
    }
    else if(i%5==0){
        console.log("Buzz");
        li= `<li>Buzz</li>`;
    }
    else{
        console.log(i);
        li= `<li>${i}</li>`;
    } 

    /* modificheremo la struttura attraverso innerhtml 
    del contenuto di listpoint aggiungendo il contenuto di li  */
    listpoint.innerHTML+=li;
}  



/* ESEMPIO CON APPENDCHILD 


for(let i=1; i<=100; i++) {

let li=document.createElement("li");

    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");   
        li.innerText= `FizzBuzz`;
    } 
    else if(i%3==0){
        console.log("Fizz");
        li.innerText= `Fizz`;
    }
    else if(i%5==0){
        console.log("Buzz");
        li.innerText= `Buzz`;
    }
    else{
        console.log(i);
        li.innerText= i;
    } 
   listpoint.appendChild(li);
      
} */
