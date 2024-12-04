import { fromEvent, map, merge, tap } from "rxjs"


// une observables, si se ejecuta uno, dispara el otro etc

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    keyup$.pipe(map(({type})=>console.log('key', type))), 
    click$.pipe(map(({type})=>console.log('click', type))), 
).subscribe(console.log)