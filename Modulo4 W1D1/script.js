//Esercizio 1

function verificaNumeri(num1, num2) {
   return num1 === 50 || num2 === 50 || (num1 + num2);
} 

//alcuni esempi:
console.log(verificaNumeri(20, 20)); //false
console.log(verificaNumeri(50, 10)); //true
console.log(verificaNumeri(25, 25)); //true

//Esercizio 2

function rimuoviCarattere(stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.length) {
        return "posizione non valida";
    }
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}

//Esercizio 3

function controllaNumeri (num1,num2) {
    const tra40e60 = ( num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const tra70e100 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);
}

//alcuni esempi:
console.log(controllaNumeri(75, 85)); // true 
console.log(controllaNumeri(30, 50)); // false 
console.log(controllaNumeri(85, 60)); //false

//Esercizio 4

function controllaNomeCitta(citta) {
    let nomeLower = citta.toLowerCase();
    
    if (nomeLower.startsWith("los") || nomeLower.startsWith("new")) {
        return citta;
    } else {
        return false;
    }
}

// Esempi 
console.log(controllaNomeCitta("Los Angeles")); // "Los Angeles"
console.log(controllaNomeCitta("New York"));    // "New York"
console.log(controllaNomeCitta("San Francisco"));// false

//Esercizio 5

function sommaElementiArray(array) {
    let somma = 0;

    for (let i = 0; i < array.length; i++) {
        somma += array[i];
    }
    
    return somma;
}

// Esempi 
console.log(sommaElementiArray([1, 2, 3, 4, 5])); // 15
console.log(sommaElementiArray([10, 20, 30, 40])); // 100
console.log(sommaElementiArray([-1, -2, -3, -4])); // -10

//Esercizio 6

function verificaArray(array) {
    for (let i = 0; i < array.length; i++) {
    
        if (array[i] === 1 || array[i] === 3) {
            return false;
        }
    }

    return true;
}

// Esempi 
console.log(verificaArray([2, 4, 5, 6])); // true
console.log(verificaArray([1, 4, 5, 6])); // false
console.log(verificaArray([3, 4, 5, 6])); // false

//Esercizio 7

function tipoDiAngolo(gradi) {
    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto";
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso";
    } else if (gradi === 180) {
        return "piatto";
    } else {
        return "Valore non valido";
    }
}

// Esempi 
console.log(tipoDiAngolo(45));  // "acuto"
console.log(tipoDiAngolo(90));  // "retto"
console.log(tipoDiAngolo(135)); // "ottuso"

//Esercizio 8

function creaAcronimo(frase) {
    let parole = frase.split(' ');

    let acronimo = '';

    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i][0].toUpperCase();
    }

    
    return acronimo;
}

// Esempi 
console.log(creaAcronimo("Fabbrica Italiana Automobili Torino")); // "FIAT"
console.log(creaAcronimo("National Aeronautics and Space Administration")); // "NASA"
console.log(creaAcronimo("Light Amplification by Stimulated Emission of Radiation")); // "LASER"






