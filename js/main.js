"use strict"

// Variabili Ciclo
const elementInizio=1;
const elementFine=100;


const elementUl=document.querySelector(".lista");

// Ciclo

for (let i = elementInizio; i <= elementFine; i++) {

    const elementLi = document.createElement("li");

    // Multipli di 3 e 5

    if (i % 5 === 0 && i % 3 === 0)  {
        console.log("FizzBuzz");
        
        elementLi.append("FizzBuzz");

        elementLi.classList.add("fizz-buzz");
    }

    // Multipli di 5

    else if (i % 5 === 0) {
        console.log("Buzz");

        elementLi.append("Buzz");

        elementLi.classList.add("buzz");
    }
    
    // Multipli di 3

    else if (i % 3 === 0) {
        console.log("Fizz");
        
        elementLi.append("Fizz");

        elementLi.classList.add("fizz");

    }

    else if (i % 1 === 0) {
        console.log(i);

        elementLi.append(i);

        elementLi.classList.add("numero");
    }

    elementUl.append(elementLi);
}