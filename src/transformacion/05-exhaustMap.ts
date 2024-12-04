

// exhaustMap
/*
* Si el observable interno ya está en ejecución (es decir, la operación está en curso), exhaustMap 
* ignorará cualquier nueva emisión hasta que el observable actual se complete.
*/

import { exhaustMap, fromEvent, interval, Observable, switchMap, take } from "rxjs";

const body = document.body;


const button = document.createElement('button');
button.textContent = "Click me!";
body.appendChild(button);

const clickButton$ = fromEvent<MouseEvent>(button, 'click');

const fakeApiRest = (): Observable<number> => interval(1000).pipe(take(3));


clickButton$.pipe(
    exhaustMap(fakeApiRest)
).subscribe({
    next: value => console.log(`Valor emitido: ${value}`),
    complete: () => console.log('Completado!')
});



