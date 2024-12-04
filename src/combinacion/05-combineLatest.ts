import { combineLatest, fromEvent, map, merge, tap } from "rxjs"

// combina la ultima emision con la pasada
 

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

combineLatest(
    keyup$.pipe(map(({key})=>key)), 
    click$.pipe(map(({x,y})=>({x,y}))), 
).subscribe(console.log)