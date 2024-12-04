import { fromEvent, map } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
/* 
* transforma el elemento, similar a pluck"toma", que es deprecrated
*/
const keyupcode$ = keyup$.pipe(
   // tap(console.log),
    map(({key})=>key)
)

keyupcode$.subscribe(console.log)

