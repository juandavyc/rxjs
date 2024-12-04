import { concatMap, delay, mergeAll, mergeMap, Observable, of, switchMap } from "rxjs";
import { ids } from "webpack";

// concatmap
/*
* Ejecución secuencial: Procesa los observables en orden, 
* garantizando que cada uno termine antes de iniciar el siguiente.
*/


const fakeApiRest = (id: number): Observable<string> => {
    return of(`Response: {id:${id}}`).pipe(
        delay(2000)
    )
}

const ids$ = of(1, 2, 3);

ids$.pipe(
   // mergeMap(fakeApiRest) // todas son concurrentes, las combina
   // switchMap(fakeApiRest) // ejecuta la ultima (3)
    concatMap(fakeApiRest) // espera a que acabe la primera, luego la segunda ...
).subscribe(data => console.log('subs: ',data))
