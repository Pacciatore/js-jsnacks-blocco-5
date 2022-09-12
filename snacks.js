/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


const squadreCalcio = [
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Bari',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    }
];

squadreCalcio.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * 20) + 1;
    squadra.falliSubiti = Math.floor(Math.random() * 40) + 1;
});

console.log({ squadreCalcio });


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

const array = ['pippo0', 'pippo1', 'pippo2', 'pippo3', 'pippo4', 'pippo5', 'pippo6', 'pippo7', 'pippo8', 'pippo9',];

const min = parseInt(prompt('Inserire numero minimo: '));
const max = parseInt(prompt('Inserire numero massimo: '));

const newArray = snackDue(array, min, max);

console.log(newArray);

function snackDue(array, min, max) {

    const newArray = [];

    for (let index = min + 1; index < max; index++) {
        const element = array[index];
        newArray.push(element);
    }

    // Il nuovo array è composto dai valori dell'array con indice compreso tra a e b
    return newArray;

}



/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */



const zucchine = [
    {
        peso: 55,
        lunghezza: 20,
    },

    {
        peso: 5,
        lunghezza: 2,
    },

    {
        peso: 10,
        lunghezza: 11,
    },

    {
        peso: 25,
        lunghezza: 16,
    },

    {
        peso: 33,
        lunghezza: 33,
    },

    {
        peso: 43,
        lunghezza: 24,
    },

    {
        peso: 10,
        lunghezza: 8,
    },

    {
        peso: 13,
        lunghezza: 15,
    },

    {
        peso: 22,
        lunghezza: 6,
    },

    {
        peso: 3,
        lunghezza: 5,
    },

];
console.log(zucchine);


const zucchineCorte = [];
const zucchineLunghe = [];

let pesoCorte = 0;
let pesoLunghe = 0;

zucchine.forEach(zucchina => {
    if (zucchina.lunghezza >= 15) {
        zucchineLunghe.push(zucchina);
        pesoLunghe += pesoLunghe + zucchina.peso;
    } else {
        zucchineCorte.push(zucchina);
        pesoCorte += pesoCorte + zucchina.peso;
    }
});

console.log(`Peso totale zucchine corte: ${pesoCorte} kg
Peso totale zucchine lunghe: ${pesoLunghe} kg`);