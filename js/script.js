// creiamo un ciclo che conti 100 numeri 
for(let i=1 ; i<=100; i++) {

    /* ci poniamo le domande iniziando da:
     il numero che abbiamo è divisibile per 3 e per 5?  */
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}