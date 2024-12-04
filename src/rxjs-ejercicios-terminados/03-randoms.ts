import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() => {

    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
        take(5),
        map(val => Math.round(Math.random() * 100))
    );
    // No tocar la creación del observable
    // ============================================
    
    // se puede subscribir a multiples obervabes
    const subject$ = new Subject();

    // esta es la subscripcion principal
    const relojSubject$ = reloj$.subscribe(subject$);

    // las subscripciones se disparan a subject
    const sub1 = subject$.subscribe((next)=>console.log('s1:',next))
    const sub2 = subject$.subscribe((next)=>console.log('s2:',next))

    // Estos dos observables deben de emitir exactamente los mismos valores
    //   reloj$.subscribe( val => console.log('obs1', val) );
    //   reloj$.subscribe( val => console.log('obs2', val) );

})();

