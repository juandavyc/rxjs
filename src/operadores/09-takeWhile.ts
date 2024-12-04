import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

// SE EJECUTARA HASTA QUE CLICK EN UNA
// coordenada mayor a 350

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile( ({ y })=> y <= 350, true )

).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});