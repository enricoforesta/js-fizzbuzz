"use strict"

// Variabili Ciclo
const elementInizio=1;
const elementFine=100;


// Ciclo

for (let i = elementInizio; i <= elementFine; i++) {

    // Multipli di 3 e 5

    if (i % 5 === 0 && i % 3 === 0)  {
        console.log("FizzBuzz");
    }

    // Multipli di 5

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    
    // Multipli di 3

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 1 === 0) {
        console.log(i);
    }
}