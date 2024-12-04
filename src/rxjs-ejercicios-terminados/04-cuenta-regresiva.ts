import { interval, map, scan, take, tap } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        take(8),
        // map(num =>(num-inicio)*-1)
        map(num => inicio - num)
    );

    // 7 7 7 7 7 7 7 7
    // 0 1 2 3 4 5 6 7
    // 7 6 
    // No tocar esta línea ==================

    countdown$.subscribe(console.log); // =
    // ======================================
    //8 7 6 5 4 3 2 1 0

})();

