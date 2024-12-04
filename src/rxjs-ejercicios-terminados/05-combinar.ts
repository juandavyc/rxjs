import { interval, timer, tap, merge, combineLatest } from 'rxjs';
import { concatAll, concatMap, exhaustMap, map, mergeAll, mergeMap, take } from 'rxjs/operators';
/**
 * Ejercicio: Combinar ambos observables (letras$, numeros$)
 * para que las emisiones sean la concatenación de los últimos
 * valores emitidos
 */

//  Ejemplo de la tada esperada:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() =>{

    const letras  = ['a','b','c','d','e'];
    const numeros = [1,2,3,4,5];

    // Emite letras cada segundo
    const letras$  = interval(1000).pipe(
        map( i => letras[i] ),
        take( letras.length )
    );
    
    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas 
    const numeros$ = timer(500,1000).pipe(
        map( i => numeros[i] ),
        take( numeros.length )
    );

    // ========================================
    // Empezar a codificar aquí abajo
    // Nota, el subscribe debe de ser así
    // .subscribe( console.log )
    // Es decir, la salida en el subscribe debe 
    // de estar procesada en su totalidad
    // ========================================

    // concatmap, une todo el primer stream con el final del segundo,
    // a 1,2,3,4... b 1 2 3 
    // mergemap
    // arroja el stream segun los timers, respuestas del server etc.
    // exhaustMap
    // ignorara el observable externo hasta que acabe el interno

   
    // letras$.pipe(
    //     mergeAll(letra =>numeros$.pipe(
    //         tap((numero)=>{
    //             console.log(letra, numero)
    //         })
    //     ))
    // ).subscribe()

    combineLatest([letras$,numeros$]).pipe(
        map(([letra, numero])=> (`${letra} ${numero}`))
    )
    
    .subscribe(console.log)


})();

		