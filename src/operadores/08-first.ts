import { first, fromEvent, map, pipe, take, tap } from "rxjs";
/* primera condicion y muere (complete) */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(() => console.log('tap')),
    map(({clientX,clientY})=>({clientX,clientY})),
    first((client) => client.clientY >= 150)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
})
// cuando se cumple la primera condicion