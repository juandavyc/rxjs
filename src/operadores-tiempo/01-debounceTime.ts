import { debounceTime, filter, fromEvent, map } from "rxjs";

const clickDocument$ = fromEvent<MouseEvent>(document, 'click');
/*
* restringe a milisegundos cada peticion
*
*/
// lo restringe a que cada segundo se  pueda enviar la peticiuon
clickDocument$.pipe(
    debounceTime(1000),
    map(({ x, y }) => ({ x, y })),
    filter(({ x, y }) => x <= 500),
).subscribe(console.log);


const input = document.createElement('input');
document.body.appendChild(input);

const keyInput$ = fromEvent<KeyboardEvent>(input, 'keyup');

keyInput$.pipe(
    debounceTime(1000)
)

.subscribe(console.log);


